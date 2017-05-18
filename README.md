<!-- @file Instructions for subtheming using the Sass Starterkit. -->
<!-- @defgroup sub_theming_sass -->
<!-- @ingroup sub_theming -->

## This is my Version of this sub theme, using gulp/node to compile sass
## Mainly just do this:
` bower install --save bootstrap-sass `

## If you get this
`[15:34:06] Warning: gulp version mismatch:
[15:34:06] Global gulp is 3.9.1
[15:34:06] Local gulp is 3.9.0`

## Do this
` npm install gulp@3.9.1 --save`

below are the original Bootstrap Sass Subtheme instructions.

# Sass Starterkit

Below are instructions on how to create a Bootstrap sub-theme using a Sass
preprocessor.

- [Prerequisites](#prerequisites)
- [Additional Setup](#setup)
- [Overrides](#overrides)

## Prerequisites
- Read the @link getting_started Getting Started @endlink and @link sub_theming Sub-theming @endlink documentation topics.
- You must understand the basic concept of using the [Sass] CSS pre-processor.
- You must use a **[local Sass compiler](https://www.google.com/search?q=sass+compiler)**.
- You must use the [Bootstrap Framework Source Files] ending in the `.scss`
  extension, not files ending in `.css`.

## Additional Setup {#setup}
Download and extract the **latest** 3.x.x version of
[Bootstrap Framework Source Files] into the root of your new sub-theme. After
it has been extracted, the directory should be renamed (if needed) so it reads
`./sass_my_boot/bootstrap`.

If for whatever reason you have an additional `bootstrap` directory wrapping the
first `bootstrap` directory (e.g. `./sass_my_boot/bootstrap/bootstrap`), remove the
wrapping `bootstrap` directory. You will only ever need to touch these files if
or when you upgrade your version of the [Bootstrap Framework].

{.alert.alert-warning} **WARNING:** Do not modify the files inside of
`./sass_my_boot/bootstrap` directly. Doing so may cause issues when upgrading the
[Bootstrap Framework] in the future.

## Overrides {#overrides}
The `./sass_my_boot/sass/_default-variables.scss` file is generally where you will
spend the majority of your time providing any default variables that should be
used by the [Bootstrap Framework] instead of its own.

The `./sass_my_boot/sass/overrides.scss` file contains various Drupal overrides to
properly integrate with the [Bootstrap Framework]. It may contain a few
enhancements, feel free to edit this file as you see fit.

The `./sass_my_boot/scss/style.scss` file is the glue that combines:
`_default-variables.scss`, [Bootstrap Framework Source Files] and the 
`overrides.scss` file together. Generally, you will not need to modify this
file unless you need to add or remove files to be imported. This is the file
that you should compile to `./sass_my_boot/css/style.css` (note the same file
name, using a different extension of course).

#### See also:
- @link theme_settings Theme Settings @endlink
- @link templates Templates @endlink
- @link plugins Plugin System @endlink

[Bootstrap Framework]: http://getbootstrap.com
[Bootstrap Framework Source Files]: https://github.com/twbs/bootstrap-sass
[Sass]: http://sass-lang.com
# sass_my_boot
