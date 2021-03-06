"use strict";

function OnNewShellUI( shellUI ) {
	/// <summary>The entry point of ShellUI module.</summary>
	/// <param name="shellUI" type="MFiles.ShellUI">The new shell UI object.</param> 

	// Register to listen new shell frame creation event.
	shellUI.Events.Register( Event_NewShellFrame, newShellFrameHandler );
}

function newShellFrameHandler( shellFrame ) {
	/// <summary>Handles the OnNewShellFrame event.</summary>
	/// <param name="shellFrame" type="MFiles.ShellFrame">The new shell frame object.</param> 

	// Register to listen the started event.
	shellFrame.Events.Register( Event_Started, getShellFrameStartedHandler( shellFrame ) );
}

function getShellFrameStartedHandler( shellFrame ) {
	/// <summary>Gets a function to handle the Started event for shell frame.</summary>
	/// <param name="shellFrame" type="MFiles.ShellFrame">The current shell frame object.</param> 
	/// <returns type="MFiles.Events.OnStarted">The event handler.</returns>

	// Return the handler function for Started event.
    return function () {        
	
		// Shell frame object is now started.
		
		// Create some commands.
		var commandShow1 = shellFrame.Commands.CreateCustomCommand( "Show Message" );
		
		// Add a command to the context menu.
		shellFrame.Commands.AddCustomCommandToMenu( commandShow1, MenuLocation_ContextMenu_Bottom, 0 );
		
		// Set the command handler function.
		shellFrame.Commands.Events.Register( Event_CustomCommand, function( command ) {
		
			// Branch by command.
			if( command == commandShow1 ) {
				
			    // Show a message from the managed code
			    var library = MFiles.CreateObjectCLR("$safeprojectname$.dll", "$safeprojectname$.Program");
			    library.ShowMessage(shellFrame.OuterWindow.Handle, library.getMessage(), shellFrame.ShellUI.Vault);

			    //TO-DO: RELEASE THE BLOODY LIBRARY SO EXPLORER.EXE DOESN'T LOCK THE .DLL!!!!!!
			    //GAHHHHH!!!!
			    //"delete" keyword doesn't work, neither does library = null...
				
			}
		});
	};
}
