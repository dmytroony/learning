## Rspeedy project - Gallery

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Getting Started

1. Install the dependencies:

```bash
npm install
```

2. Run the development server:

```bash
pnpm run dev
```

3. Scan the QRCode in the terminal with your LynxExplorer App to see the result.

4. Start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.


5. How to run .dmg on Fedora Linux

Step 1: Install QEMU/KVM & Required Packages
Open a terminal and install the necessary packages:
```bash
sudo dnf install -y qemu-kvm libvirt virt-manager virt-install bridge-utils edk2-ovmf
```
- qemu-kvm → QEMU with KVM acceleration
- libvirt → Manages virtual machines
- virt-manager → GUI tool for managing VMs
- virt-install → Command-line VM installer
- bridge-utils → Networking tools for VMs
- edk2-ovmf → UEFI firmware for virtual machines

Step 2: Start and Enable libvirt Service
```bash
sudo systemctl enable --now libvirtd
```
This makes sure that libvirt starts on boot.

Step 3: Download macOS-Simple-KVM
A preconfigured macOS QEMU/KVM setup exists on GitHub:
```bash
git clone --depth 1 https://github.com/foxlet/macOS-Simple-KVM.git
cd macOS-Simple-KVM
```

Step 4: Download macOS Installer
Run the script to download a macOS image:
```bash
./jumpstart.sh --catalina  # or use --big-sur / --monterey / --ventura
```
This downloads the macOS recovery image.

Step 5: Configure QEMU VM
Edit the basic.sh script to adjust the settings:
```bash
nano basic.sh
```
Modify RAM, CPU cores, and disk size to suit your needs and your PC requirements.

Step 6: Start macOS VM
Run the basic.sh script to start the VM:
```bash
./basic.sh
```
Follow the macOS installation steps inside the VM.

Step 7: Install macOS and Bootloader
- Install macOS on the virtual disk.
- Set up OpenCore as a bootloader to avoid issues.

Next Steps
After installation, you can install Lynx DevTool inside the VM.
