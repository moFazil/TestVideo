"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-client_src_components_Editor_tsx",{

/***/ "(app-client)/./src/components/Editor.tsx":
/*!***********************************!*\
  !*** ./src/components/Editor.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; },\n/* harmony export */   EditorWithStore: function() { return /* binding */ EditorWithStore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ \"(app-client)/./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"(app-client)/./src/store/index.tsx\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ \"(app-client)/./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resources */ \"(app-client)/./src/components/Resources.tsx\");\n/* harmony import */ var _panels_ElementsPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/ElementsPanel */ \"(app-client)/./src/components/panels/ElementsPanel.tsx\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ \"(app-client)/./src/components/Menu.tsx\");\n/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeLine */ \"(app-client)/./src/components/TimeLine.tsx\");\n/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/Store */ \"(app-client)/./src/store/Store.ts\");\n/* harmony import */ var _utils_fabric_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/fabric-utils */ \"(app-client)/./src/utils/fabric-utils.ts\");\n/* __next_internal_client_entry_do_not_use__ EditorWithStore,Editor auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst EditorWithStore = ()=>{\n    _s();\n    const [store] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new _store_Store__WEBPACK_IMPORTED_MODULE_8__.Store());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__.StoreContext.Provider, {\n        value: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {}, void 0, false, {\n            fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditorWithStore, \"/kJhCyk8giGg5HbDzxwfPFcsMbw=\");\n_c = EditorWithStore;\nconst Editor = (0,mobx_react__WEBPACK_IMPORTED_MODULE_10__.observer)(_s1(()=>{\n    _s1();\n    const store = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_store__WEBPACK_IMPORTED_MODULE_3__.StoreContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Canvas(\"canvas\", {\n            height: 500,\n            width: 1000,\n            backgroundColor: \"#ededed\"\n        });\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.transparentCorners = false;\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerColor = \"#00a0f5\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerStyle = \"circle\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerStrokeColor = \"#0063d8\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerSize = 10;\n        // canvas mouse down without target should deselect active object\n        canvas.on(\"mouse:down\", function(e) {\n            if (!e.target) {\n                store.setSelectedElement(null);\n            }\n        });\n        store.setCanvas(canvas);\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.requestAnimFrame(function render() {\n            canvas.renderAll();\n            fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.requestAnimFrame(render);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-rows-[500px_1fr_20px] grid-cols-[72px_300px_1fr_250px] h-[100svh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tile row-span-2 flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_6__.Menu, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row-span-2 flex flex-col overflow-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Resources__WEBPACK_IMPORTED_MODULE_4__.Resources, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"grid-canvas-container\",\n                className: \"col-start-3 bg-slate-100 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"canvas\",\n                    className: \"h-[500px] w-[800px] row\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-4 row-start-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_ElementsPanel__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-3 row-start-2 col-span-2 relative px-[10px] py-[4px] overflow-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLine__WEBPACK_IMPORTED_MODULE_7__.TimeLine, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n}, \"mP32dbaVPuu84LIkhD51zB/6K1Y=\"));\n_c1 = Editor;\nvar _c, _c1;\n$RefreshReg$(_c, \"EditorWithStore\");\n$RefreshReg$(_c1, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNtQjtBQUNaO0FBQ0Q7QUFDRTtBQUNlO0FBQ3pCO0FBQ1E7QUFDQTtBQUNSO0FBRXZCLE1BQU1XLGtCQUFrQjs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNLEdBQUdULCtDQUFRQSxDQUFDLElBQUlPLCtDQUFLQTtJQUNsQyxxQkFDRSw4REFBQ04sZ0RBQVlBLENBQUNTLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzVCLDRFQUFDRzs7Ozs7Ozs7OztBQUdQLEVBQUM7R0FQWUo7S0FBQUE7QUFTTixNQUFNSSxTQUFTVixxREFBUUEsS0FBQzs7SUFDN0IsTUFBTU8sUUFBUVgsdURBQWdCLENBQUNHLGdEQUFZQTtJQUUzQ0YsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxTQUFTLElBQUlqQiwwQ0FBTUEsQ0FBQ2tCLE1BQU0sQ0FBQyxVQUFVO1lBQ3pDQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsaUJBQWlCO1FBQ25CO1FBQ0FyQiwwQ0FBTUEsQ0FBQ3NCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxrQkFBa0IsR0FBRztRQUM3Q3hCLDBDQUFNQSxDQUFDc0IsTUFBTSxDQUFDQyxTQUFTLENBQUNFLFdBQVcsR0FBRztRQUN0Q3pCLDBDQUFNQSxDQUFDc0IsTUFBTSxDQUFDQyxTQUFTLENBQUNHLFdBQVcsR0FBRztRQUN0QzFCLDBDQUFNQSxDQUFDc0IsTUFBTSxDQUFDQyxTQUFTLENBQUNJLGlCQUFpQixHQUFHO1FBQzVDM0IsMENBQU1BLENBQUNzQixNQUFNLENBQUNDLFNBQVMsQ0FBQ0ssVUFBVSxHQUFHO1FBQ3JDLGlFQUFpRTtRQUNqRVgsT0FBT1ksRUFBRSxDQUFDLGNBQWMsU0FBVUMsQ0FBQztZQUNqQyxJQUFJLENBQUNBLEVBQUVDLE1BQU0sRUFBRTtnQkFDYm5CLE1BQU1vQixrQkFBa0IsQ0FBQztZQUMzQjtRQUNGO1FBRUFwQixNQUFNcUIsU0FBUyxDQUFDaEI7UUFDaEJqQiwwQ0FBTUEsQ0FBQ2tDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBU0M7WUFDcENuQixPQUFPb0IsU0FBUztZQUNoQnJDLDBDQUFNQSxDQUFDa0MsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0M7UUFDL0I7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDL0IsdUNBQUlBOzs7Ozs7Ozs7OzBCQUVQLDhEQUFDOEI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQyxpREFBU0E7Ozs7Ozs7Ozs7MEJBRVosOERBQUNnQztnQkFBSUUsSUFBRztnQkFBd0JELFdBQVU7MEJBQ3hDLDRFQUFDdEI7b0JBQU91QixJQUFHO29CQUFTRCxXQUFVOzs7Ozs7Ozs7OzswQkFFaEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDaEMsZ0VBQWFBOzs7Ozs7Ozs7OzBCQUVoQiw4REFBQytCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDOUIsK0NBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCLG9DQUFHO01BL0NVTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FZGl0b3IudHN4PzU5NmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBmYWJyaWMgfSBmcm9tIFwiZmFicmljXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gXCJAL3N0b3JlXCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSBcIi4vUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzUGFuZWwgfSBmcm9tIFwiLi9wYW5lbHMvRWxlbWVudHNQYW5lbFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZSB9IGZyb20gXCIuL1RpbWVMaW5lXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IFwiQC91dGlscy9mYWJyaWMtdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JXaXRoU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0b3JlXSA9IHVzZVN0YXRlKG5ldyBTdG9yZSgpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvcmV9PlxyXG4gICAgICA8RWRpdG9yPjwvRWRpdG9yPlxyXG4gICAgPC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRvciA9IG9ic2VydmVyKCgpID0+IHtcclxuICBjb25zdCBzdG9yZSA9IFJlYWN0LnVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKFwiY2FudmFzXCIsIHtcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgIHdpZHRoOiAxMDAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VkZWRlZFwiLFxyXG4gICAgfSk7XHJcbiAgICBmYWJyaWMuT2JqZWN0LnByb3RvdHlwZS50cmFuc3BhcmVudENvcm5lcnMgPSBmYWxzZTtcclxuICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLmNvcm5lckNvbG9yID0gXCIjMDBhMGY1XCI7XHJcbiAgICBmYWJyaWMuT2JqZWN0LnByb3RvdHlwZS5jb3JuZXJTdHlsZSA9IFwiY2lyY2xlXCI7XHJcbiAgICBmYWJyaWMuT2JqZWN0LnByb3RvdHlwZS5jb3JuZXJTdHJva2VDb2xvciA9IFwiIzAwNjNkOFwiO1xyXG4gICAgZmFicmljLk9iamVjdC5wcm90b3R5cGUuY29ybmVyU2l6ZSA9IDEwO1xyXG4gICAgLy8gY2FudmFzIG1vdXNlIGRvd24gd2l0aG91dCB0YXJnZXQgc2hvdWxkIGRlc2VsZWN0IGFjdGl2ZSBvYmplY3RcclxuICAgIGNhbnZhcy5vbihcIm1vdXNlOmRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKCFlLnRhcmdldCkge1xyXG4gICAgICAgIHN0b3JlLnNldFNlbGVjdGVkRWxlbWVudChudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RvcmUuc2V0Q2FudmFzKGNhbnZhcyk7XHJcbiAgICBmYWJyaWMudXRpbC5yZXF1ZXN0QW5pbUZyYW1lKGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICBmYWJyaWMudXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHJlbmRlcik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtWzUwMHB4XzFmcl8yMHB4XSBncmlkLWNvbHMtWzcycHhfMzAwcHhfMWZyXzI1MHB4XSBoLVsxMDBzdmhdXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgcm93LXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXNjcm9sbFwiPlxyXG4gICAgICAgIDxSZXNvdXJjZXMgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJncmlkLWNhbnZhcy1jb250YWluZXJcIiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMyBiZy1zbGF0ZS0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgY2xhc3NOYW1lPVwiaC1bNTAwcHhdIHctWzgwMHB4XSByb3dcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtNCByb3ctc3RhcnQtMVwiPlxyXG4gICAgICAgIDxFbGVtZW50c1BhbmVsIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC0zIHJvdy1zdGFydC0yIGNvbC1zcGFuLTIgcmVsYXRpdmUgcHgtWzEwcHhdIHB5LVs0cHhdIG92ZXJmbG93LXNjcm9sbFwiPlxyXG4gICAgICAgIDxUaW1lTGluZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZmFicmljIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlQ29udGV4dCIsIm9ic2VydmVyIiwiUmVzb3VyY2VzIiwiRWxlbWVudHNQYW5lbCIsIk1lbnUiLCJUaW1lTGluZSIsIlN0b3JlIiwiRWRpdG9yV2l0aFN0b3JlIiwic3RvcmUiLCJQcm92aWRlciIsInZhbHVlIiwiRWRpdG9yIiwidXNlQ29udGV4dCIsImNhbnZhcyIsIkNhbnZhcyIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidHJhbnNwYXJlbnRDb3JuZXJzIiwiY29ybmVyQ29sb3IiLCJjb3JuZXJTdHlsZSIsImNvcm5lclN0cm9rZUNvbG9yIiwiY29ybmVyU2l6ZSIsIm9uIiwiZSIsInRhcmdldCIsInNldFNlbGVjdGVkRWxlbWVudCIsInNldENhbnZhcyIsInV0aWwiLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVuZGVyIiwicmVuZGVyQWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Editor.tsx\n"));

/***/ })

});