# FIPS packages for AlmaLinux

Below are the instructions for installing the TuxCare FIPS 140-3 validated modules for AlmaLinux 9.2, they should be run as root.

By installing this software, you agree to be bound by the terms of the [TuxCare Community EULA](https://tuxcare.com/wp-content/uploads/2023/09/COMMUNITY-EULA.txt).

```
# dnf -y install https://repo.tuxcare.com/fips/tuxcare-fips-release-latest-9.noarch.rpm
# dnf -y install openssl-3.0.7-20.el9_2.tuxcare.1 kernel-5.14.0-284.11.1.el9_2.tuxcare.5
# fips-mode-setup --enable
# reboot
```

Once you've logged in after the reboot, run this to confirm it worked (doesn't have to be root):

```
$ fips-mode-setup --check
$ uname -r
```

You should get a message like this (may say `aarch64` instead of `x86_64`):

```
FIPS mode is enabled.
5.14.0-284.11.1.el9_2.tuxcare.5.x86_64
```

If you wish to stay on the FIPS validated kernel/openssl packages when a newer AlmaLinux package is available, you can use `dnf versionlock` like so:

```
# dnf -y install 'dnf-command(versionlock)'
# dnf versionlock add openssl*tuxcare* kernel*tuxcare*
```

To revert to the previous behaviour of getting updated kernel/openssl packages from AlmaLinux, run the following as root:

```
# dnf versionlock delete openssl*tuxcare* kernel*tuxcare*
```
