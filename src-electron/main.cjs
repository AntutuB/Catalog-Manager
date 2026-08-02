const {
    app,
    BrowserWindow
} = require("electron");

const path = require("path");


function createWindow(){

    const win = new BrowserWindow({

        width:1400,

        height:900,

        webPreferences:{

            contextIsolation:true

        }

    });


    win.loadFile(

        path.join(

            __dirname,

            "../dist/index.html"

        ),

        {

            hash:"/"

        }

    );


    

}


app.whenReady().then(()=>{

    createWindow();

});