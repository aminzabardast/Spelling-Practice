<template>
    <div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
main {
    max-width: 800px;
    margin-left:auto;
    margin-right:auto;
    padding: 10px;
}
</style>
