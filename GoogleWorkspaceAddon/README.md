# Google Workspace Addon

## Development Env

Install dependencies:
```shell
pnpm i
```

Log into Clasp:
```shell
pnpm run clasp-login
```

You should give access to your google scripts etc.

Also make sute that the `ScriptID` in `.clasp.json` file is the ID of a script connected to a GoogleSheets item.

Steps:
1. Make a new google sheets.
2. Go to "App Scripts" from extentions menu.
3. Got to settings in the App Script page and copy the ScriptID to `.clasp.json` file.
4. Build and push. You need to authorize.
    ```shell
    pnpm run dev
    ```
5. Refresh the sheets page. Now you can see the extention menu.
6. Running items in the menu requires giving permissions as well.
