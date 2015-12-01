using System;
using System.Windows.Forms;

namespace $safeprojectname$
{
    public class Program
    {
        /// <summary>
        /// Show a message
        /// 
        /// Usage:
        /// var o = MFiles.CreateObjectCLR( "$safeprojectname$.dll", "$safeprojectname$.Program" );
        /// o.ShowMessage( shellFrame.OuterWindow.Handle, "Hello!", shellFrame.ShellUI.Vault )
        /// </summary>
        /// <param name="parentHWND"></param>
        /// <param name="message"></param>
        /// <param name="vault"></param>
        public void ShowMessage(Int32 parentHWND, string message, dynamic vault)
        {
            IWin32Window parentWindow = Control.FromHandle((IntPtr)parentHWND);
            MessageBox.Show( parentWindow, message, vault.Name );
        }

        public string getMessage()
        {
            return "Hello! I came from the managed library!";
        }
    }
}