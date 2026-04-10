# NSS-FIPS and Java crypto APIs

## Java crypto

Java has a fully abstract crypto API with a pluggable cryptographic implementation organized into 
crypto Providers. Providers, as the name suggests, provide implementations for various crypto 
algorithms. The providers are loaded using JRE's configuration, either system-wide or per 
deployment, or can be loaded at application runtime.

The order of available crypto providers is important as methods such as 
Cipher.getInstance(algorithm) without specifying the exact provider name (through second 
parameter) will return a matching implementation from the first provider that implements that 
crypto mechanism.

Some providers, like one of the default JDK providers – SunJCE – provide only the basic crypto 
primitives. Others - like SunJSSE – provide higher level operations that rely on crypto primitives 
implemented by other providers. Those operations are, for instance, those being part of TLS or 
X509 standards in order to handle transport layer security or public key infrastructure.

## FIPS compliant implementations

In order to use FIPS compliant and FIPS certified implementations of cryptographic mechanisms 
the application should use a crypto provider that interfaces with a concrete implementation certified 
to be FIPS compliant. Many 3rd party applications or libraries (packages) rely on the Provider 
infrastructure and cede the choice of crypto implementations to the app/system maintainer.

Therefore in most cases the deployer – likely a sysadmin or devops – is free to choose an 
appropriate set of crypto providers for the application.

OpenJDK for instance allows for configuring a PKCS11 provider which can interface with a native,  
system-wide crypto library – NSS and its PKCS11 implementation – libsoftokn3.so. This 
implementation by tuxcare is FIPS compliant.

An alternative PKCS11 implementation is SoftHSM which uses OpenSSL underneath. However, 
the cryptographic boundary is slightly shifted here. libsoftokn3 with NSS is FIPS certified while 
softhsm library alone is not, although the underlying openssl is.

There are also alternative ways to interface with other system wide, FIPS compliant, native libs 
such as OpenSSL however this would need extra effort to build and maintain other, 3rd party 
providers, that are not readily available in the package repos and would have to be provided by the 
maintainer of the end application.

## Java's crypto API diagram

![Java Crypto Providers](/images/providers.webp)

## SunPKCS11 provider

SunPKCS11 is a provider which interfaces, through JNI, with a native implementation that exposes 
a PKCS11 crypto API, typically called a "token". Typically that would mean a hardware token – a 
device that implements crypto operations and exposes a PKCS11 interface through a "driver" being 
a native shared library.

## NSS-FIPS implementation

NSS-FIPS implementation acts as a software token. It provides a PKCS11 interface like any USB 
crypto token, a HSM or a smart card would, but the actual implementation is provided in software 
using libnss3.

## JSSE

JSSE provides TLS and PKI implementations and, if the provider set is properly configured, would 
have to rely on cryptographic primitives provided by NSS-FIPS.

## Alternative providers

So far NSS is the only crypto library that alone provides an "upwards-facing" PKCS11 API and 
thus can be easily and seamlessly incorporated into a Java software solution. Other means include 
using 

* softHSM

Which is also a PKCS11 provider and relies on OpenSSL underneath, however, it doesn't itself fall 
within a FIPS cryptographic boundary of the system deliverables.

* conscrypt

However, conscrypt became problematic to maintain having been hardwired to boringSSL by 
Google. Even though boringssl essentially has the same API as OpenSSL, conscrypt would require 
extra maintenance and as such is not provided as an AlmaLinux package.

* openssl-fips-java

Maintained by Canonical but not available as a package (even in Ubuntu), this provider can be built 
to interface with the FIPS implementation of OpenSSL.

## PKCS11-NSS-FIPS setup

As shown on the diagram, a PKCS11 provider needs to be configured in order to work with Java 
crypto. A HSM or smart card would require a driver in form of a shared library.

For NSS specifically – OpenJDK provides several shorthand configuration attributes.

The configuration can either be done in the application's Java code by passing the config as a String  
argument or through environment or system-wide via configuration files.

### System-wide config files

`(...)/security/java.security`

This file specifies the provider list and the order of providers. In non-fips mode this file will contain  
the following:

```
security.provider.N=SunPKCS11 ${java.home}/lib/security/nss.cfg
```

while in FIPS mode:

```
fips.provider.1=SunPKCS11 ${java.home}/conf/security/nss.fips.cfg
```

Both directives configure a SunPKCS11 provider and point to the provider-specific configuration 
files

### `(...)/security/nss.fips.cfg`

```
name = NSS-FIPS
```

The name which will be appended to "SunPKCS11-" identifying the configured provider

Followed by nss-specific directives

```
nssLibraryDirectory = /usr/lib64
nssSecmodDirectory = ${fips.nssdb.path}
nssDbMode = readWrite
nssModule = fips
```

Instead of providing a full path to the NSS shared lib one needs only to point to a library directory 
containing NSS libraries.

## SoftHSM configuration

The configuration of SoftHSM includes

* setting up a config file. If the Java app is used in non-root context (as it probably is) then the 
config file needs to be user accessible and SOFTHSM2_CONF environment variable must point to 
it.
* a keystore needs to be set up in the config file
* a SoftHSM "token" needs to be created within the keystore directory. It must be PIN protected, 
therefore
* in order to use crypto primitves Java application needs to instantiate SoftHSM KeyStore object 
and .init() it with the PIN.

## Limiting non-FIPS algorithm implementations

Neither PKCS11 alone, nor NSS, does prevent library users from instantiating and using FIPS 
unapproved algorithms. Application developers are also free to include any code within their 
applications, including FIPS unapproved cryptographic algorithms in cryptographic context, or 
using FIPS unapproved algos, like SHA-1 in non-cryptographic contexts, like file checksums or 
lookup hashes.

NSS implements a notion of a FIPS indicator which allows the application's implementer to decide 
what to do with a FIPS unapproved algorithms. Unlike openssl which bluntly fails if a non-fips 
operation is requested.

The caveat – NSS's PKCS11 API does not provide a facility for querying the indicator as there can 
be no such facility within PKCS11.

### disabledAlgorithms directive

Certain algorithms from NSS (or any other PKCS11 provider) can be blacklisted in the provider's 
config file (or by other means of configuring PKCS11). For instance DES based cipher mechanisms  
can be explicitly blocked using

```
disabledMechanisms = {
        CKM_DES_ECB
        CKM_DES_ECB_ENCRYPT_DATA
        CKM_DES3_ECB
        CKM_DES3_ECB_ENCRYPT_DATA
        CKM_DES_CBC
        CKM_DES_CBC_ENCRYPT_DATA
        CKM_DES_CBC_PAD
        CKM_DES3_CBC
        CKM_DES3_CBC_ENCRYPT_DATA
        CKM_DES3_CBC_PAD
}
```

The above will not even appear on the mechanism list for this provider.
