# Importing Icons

Here are the svg icons from the IDSK 3.0 design manual. We don't use these svg icons directly. We use SVGR to first transform svgs to React components (https://react-svgr.com)
These React icons can then be easily used in other React components.

### SVG icons import script

Place the svg icons into `src/assets/svgIcons` folder and then run this script to generate React icons:

```
npx @svgr/cli --out-dir src/components/Icons --replace-attr-values #000=currentColor  -- src/assets/svgIcons
```
