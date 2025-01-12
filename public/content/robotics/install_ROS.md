1. prerequisites:
1.1. recommend Ubuntu 24.04 LTS
with standard maintaince until Apr 2029, and legacy support until 2036

1.2. Recommend to have Nvidia graphic card, and driver installed
to view your driver version, type: 
nvidia-smi
which returns like this:
Wed Sep 16 13:53:41 2020       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 440.100      Driver Version: 440.100      CUDA Version: 10.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce MX150       Off  | 00000000:02:00.0 Off |                  N/A |
| N/A   54C    P0    N/A /  N/A |    316MiB /  2002MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|    0      1024      G   /usr/lib/xorg/Xorg                            29MiB |
|    0      1786      G   /usr/lib/xorg/Xorg                           126MiB |
|    0      2019      G   /usr/bin/gnome-shell                         101MiB |
|    0      4581      G   ...AAAAAAAAAAAACAAAAAAAAAA= --shared-files    19MiB |
|    0     78591      G   /opt/zoom/zoom                                24MiB |
|    0     84198      G   /usr/lib/firefox/firefox                       1MiB |
+-----------------------------------------------------------------------------+

1.3. Basic dependencies:
python >=3.11
pythorch
git
openssh
openCV
YOLO
VScode
Conda
Jupyter

1.4. Installation of ROS2
1.4.1 for each ros2 distribution, it correspond to a ubuntu LTS image:
Distro

Release date

Logo

EOL date

Iron Irwini

May 23rd, 2023

Iron logo

November 2024

Humble Hawksbill

May 23rd, 2022

Humble logo

May 2027

Galactic Geochelone

May 23rd, 2021

Galactic logo

December 9th, 2022

Foxy Fitzroy

June 5th, 2020

Foxy logo

June 20th, 2023

Eloquent Elusor

November 22nd, 2019

Eloquent logo

November 2020

Dashing Diademata

May 31st, 2019

Dashing logo

May 2021

Crystal Clemmys

December 14th, 2018

Crystal logo

December 2019

Bouncy Bolson

July 2nd, 2018

Bouncy logo

July 2019

Ardent Apalone

December 8th, 2017

Ardent logo

December 2018

beta3

September 13th, 2017

December 2017

beta2

July 5th, 2017

September 2017

beta1

December 19th, 2016

Jul 2017

alpha1 - alpha8

August 31th, 2015

December 2016

we recommend to install the latest LTS/stable version of dependencies and upgrade every 3 yrs. With current time(Jan 12th, 2025), we recommend to install ubuntu 24.04 and ROS2 Jazzy Jalisco, whihc both have EOL in the mid 2029. 

1.4.2 System setup
Set locale
Make sure you have a locale which supports UTF-8. If you are in a minimal environment (such as a docker container), the locale may be something minimal like POSIX. We test with the following settings. However, it should be fine if you’re using a different UTF-8 supported locale.

locale  # check for UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

locale  # verify settings
Enable required repositories
You will need to add the ROS 2 apt repository to your system.

First ensure that the Ubuntu Universe repository is enabled.

sudo apt install software-properties-common
sudo add-apt-repository universe
Now add the ROS 2 GPG key with apt.

sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
Then add the repository to your sources list.

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
Install development tools (optional)
If you are going to build ROS packages or otherwise do development, you can also install the development tools:

sudo apt update && sudo apt install ros-dev-tools
Install ROS 2
Update your apt repository caches after setting up the repositories.

sudo apt update
ROS 2 packages are built on frequently updated Ubuntu systems. It is always recommended that you ensure your system is up to date before installing new packages.

sudo apt upgrade
Desktop Install (Recommended): ROS, RViz, demos, tutorials.

sudo apt install ros-jazzy-desktop
ROS-Base Install (Bare Bones): Communication libraries, message packages, command line tools. No GUI tools.

sudo apt install ros-jazzy-ros-base
Install additional RMW implementations (optional)
The default middleware that ROS 2 uses is Fast DDS, but the middleware (RMW) can be replaced at runtime. See the guide on how to work with multiple RMWs.

Setup environment
Set up your environment by sourcing the following file.

# Replace ".bash" with your shell if you're not using bash
# Possible values are: setup.bash, setup.sh, setup.zsh
source /opt/ros/jazzy/setup.bash
Try some examples
If you installed ros-jazzy-desktop above you can try some examples.

In one terminal, source the setup file and then run a C++ talker:

source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_cpp talker
In another terminal source the setup file and then run a Python listener:

source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_py listener
You should see the talker saying that it’s Publishing messages and the listener saying I heard those messages. This verifies both the C++ and Python APIs are working properly. Hooray!