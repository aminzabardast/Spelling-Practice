export type GoogleClass = {
    script: ScriptClass
}

export type ScriptClass = {
    run: RunClass
}

export type RunClass = {
    withSuccessHandler: Function,
    doSomething: Function
}
