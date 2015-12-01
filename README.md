# M-Files Template - Custom Right Click Action With Managed Code
## How to Install
- Download Zip of project
- Unzip
- Create Zip of the folder "M-Files Right Click Action with Managed Code"
- Move Zip file to (user)/Documents/Visual Studio (version)/Templates/Project Templates/Visual C# (Don't unzip)
-- If you want to you can create a folder in the Visual C# folder called M-Files
- In Visual Studio click New>Project
- Find the new template you have created
## How to install your app to your vault
- Open the Post Build Command Line window
- Change where it says "VaultNameHere" to the name of the vault you want to install to. It must be a vault running on your local machine. Your windows user account must have admin access to the vault
- Build solution (F7)
- A window will pop up. It will install the application, restart the vault, and let you know when it is done.
## Post Build Commands explanation
- Currently, I haven't figured out how to release the reference to the managed library in the javascript code. This causes explorer.exe to lock the .dll. Killing the explorer.exe process and starting a new one releases this lock
## To-Do
- Figure out how to release the lock to the .dll using javascript
-- "delete" keyword doesn't work
-- setting the variable to null doesn't work
