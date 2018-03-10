const ENABLED = true

export default {
  plugins: [
    { cleanupAttrs: ENABLED },
    { removeDoctype: ENABLED },
    { removeXMLProcInst: ENABLED },
    { removeComments: ENABLED },
    { removeMetadata: ENABLED },
    { removeTitle: ENABLED },
    { removeDesc: ENABLED },
    { removeUselessDefs: ENABLED },
    { removeEditorsNSData: ENABLED },
    { removeHiddenElems: ENABLED },
    { removeEmptyAttrs: ENABLED },
    { removeEmptyText: ENABLED },
    { removeEmptyContainers: ENABLED },
    { removeViewBox: false },
    { cleanUpEnableBackground: ENABLED },
    { minifyStyles: ENABLED },
    { convertStyleToAttrs: false },
    { convertColors: { shorthex: false } },
    { convertPathData: false },
    { convertTransform: false },
    { removeUnknownsAndDefaults: false },
    { removeUselessStrokeAndFill: false },
    { removeUnusedNS: false },
    { cleanupIDs: false },
    { cleanupNumericValues: false },
    { moveElemsAttrsToGroup: false },
    { moveGroupAttrsToElems: false },
    { collapseGroups: false },
    { removeRasterImages: false },
    { mergePaths: false },
    { convertShapeToPath: false },
    { sortAttrs: false },
    { transformsWithOnePath: false },
    { removeDimensions: false },
    { removeAttrs: false },
    { addClassesToSVGElement: false },
    { removeStyleElement: false },
  ],
}