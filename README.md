# ember-pointer-events-polyfill

At the moment this addon just includes [jquery/PEP](https://github.com/jquery/PEP) pointer events polyfill. The addon ensures that the polyfill is imported only once, regardless of how many times it is used as a dependency.

PEP has some limitations. You need to use a `touch-action` attribute, e.g:
```html
<button id="b" touch-action="none">Test button!</button>
<script>
document.getElementById('b').addEventListener('pointerdown', function(e) {
  console.log(e);
});
</script>
```

The goal is to be able to do AST transforms to do this automatically for you, in
the same manner as ember-hammertime does for fast click.

PEP doesn't yet allow us to write `<div onpointerdown={{action "someAction"}}`.
There is an open issue about it if you want to contribute.

## Installation

* `ember install ember-pointer-events-polyfill`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
