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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; },\n/* harmony export */   EditorWithStore: function() { return /* binding */ EditorWithStore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric */ \"(app-client)/./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"(app-client)/./src/store/index.tsx\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ \"(app-client)/./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resources */ \"(app-client)/./src/components/Resources.tsx\");\n/* harmony import */ var _panels_ElementsPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/ElementsPanel */ \"(app-client)/./src/components/panels/ElementsPanel.tsx\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ \"(app-client)/./src/components/Menu.tsx\");\n/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeLine */ \"(app-client)/./src/components/TimeLine.tsx\");\n/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/Store */ \"(app-client)/./src/store/Store.ts\");\n/* harmony import */ var _utils_fabric_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/fabric-utils */ \"(app-client)/./src/utils/fabric-utils.ts\");\n/* __next_internal_client_entry_do_not_use__ EditorWithStore,Editor auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst EditorWithStore = ()=>{\n    _s();\n    const [store] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new _store_Store__WEBPACK_IMPORTED_MODULE_8__.Store());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__.StoreContext.Provider, {\n        value: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {}, void 0, false, {\n            fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditorWithStore, \"/kJhCyk8giGg5HbDzxwfPFcsMbw=\");\n_c = EditorWithStore;\nconst Editor = (0,mobx_react__WEBPACK_IMPORTED_MODULE_10__.observer)(_s1(()=>{\n    _s1();\n    const store = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_store__WEBPACK_IMPORTED_MODULE_3__.StoreContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Canvas(\"canvas\", {\n            height: 500,\n            width: 1000,\n            backgroundColor: \"#ededed\",\n            color: \"\"\n        });\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.transparentCorners = false;\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerColor = \"#00a0f5\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerStyle = \"circle\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerStrokeColor = \"#0063d8\";\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.cornerSize = 10;\n        // canvas mouse down without target should deselect active object\n        canvas.on(\"mouse:down\", function(e) {\n            if (!e.target) {\n                store.setSelectedElement(null);\n            }\n        });\n        store.setCanvas(canvas);\n        fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.requestAnimFrame(function render() {\n            canvas.renderAll();\n            fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.requestAnimFrame(render);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-rows-[500px_1fr_20px] grid-cols-[72px_300px_1fr_250px] h-[100svh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tile row-span-2 flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_6__.Menu, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row-span-2 flex flex-col overflow-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Resources__WEBPACK_IMPORTED_MODULE_4__.Resources, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"grid-canvas-container\",\n                className: \"col-start-3 bg-slate-100 flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"canvas\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-4 row-start-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_panels_ElementsPanel__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-start-3 row-start-2 col-span-2 relative px-[10px] py-[4px] overflow-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLine__WEBPACK_IMPORTED_MODULE_7__.TimeLine, {}, void 0, false, {\n                    fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\TestVideo\\\\src\\\\components\\\\Editor.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n}, \"mP32dbaVPuu84LIkhD51zB/6K1Y=\"));\n_c1 = Editor;\nvar _c, _c1;\n$RefreshReg$(_c, \"EditorWithStore\");\n$RefreshReg$(_c1, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNtQjtBQUNaO0FBQ0Q7QUFDRTtBQUNlO0FBQ3pCO0FBQ1E7QUFDQTtBQUNSO0FBRXZCLE1BQU1XLGtCQUFrQjs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNLEdBQUdULCtDQUFRQSxDQUFDLElBQUlPLCtDQUFLQTtJQUNsQyxxQkFDRSw4REFBQ04sZ0RBQVlBLENBQUNTLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQzVCLDRFQUFDRzs7Ozs7Ozs7OztBQUdQLEVBQUM7R0FQWUo7S0FBQUE7QUFTTixNQUFNSSxTQUFTVixxREFBUUEsS0FBQzs7SUFDN0IsTUFBTU8sUUFBUVgsdURBQWdCLENBQUNHLGdEQUFZQTtJQUUzQ0YsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxTQUFTLElBQUlqQiwwQ0FBTUEsQ0FBQ2tCLE1BQU0sQ0FBQyxVQUFVO1lBQ3pDQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsaUJBQWlCO1lBQ2pCQyxPQUFRO1FBQ1Y7UUFDQXRCLDBDQUFNQSxDQUFDdUIsTUFBTSxDQUFDQyxTQUFTLENBQUNDLGtCQUFrQixHQUFHO1FBQzdDekIsMENBQU1BLENBQUN1QixNQUFNLENBQUNDLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHO1FBQ3RDMUIsMENBQU1BLENBQUN1QixNQUFNLENBQUNDLFNBQVMsQ0FBQ0csV0FBVyxHQUFHO1FBQ3RDM0IsMENBQU1BLENBQUN1QixNQUFNLENBQUNDLFNBQVMsQ0FBQ0ksaUJBQWlCLEdBQUc7UUFDNUM1QiwwQ0FBTUEsQ0FBQ3VCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDSyxVQUFVLEdBQUc7UUFDckMsaUVBQWlFO1FBQ2pFWixPQUFPYSxFQUFFLENBQUMsY0FBYyxTQUFVQyxDQUFDO1lBQ2pDLElBQUksQ0FBQ0EsRUFBRUMsTUFBTSxFQUFFO2dCQUNicEIsTUFBTXFCLGtCQUFrQixDQUFDO1lBQzNCO1FBQ0Y7UUFFQXJCLE1BQU1zQixTQUFTLENBQUNqQjtRQUNoQmpCLDBDQUFNQSxDQUFDbUMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTQztZQUNwQ3BCLE9BQU9xQixTQUFTO1lBQ2hCdEMsMENBQU1BLENBQUNtQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDQztRQUMvQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNoQyx1Q0FBSUE7Ozs7Ozs7Ozs7MEJBRVAsOERBQUMrQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2xDLGlEQUFTQTs7Ozs7Ozs7OzswQkFFWiw4REFBQ2lDO2dCQUFJRSxJQUFHO2dCQUF3QkQsV0FBVTswQkFDeEMsNEVBQUN2QjtvQkFBT3dCLElBQUc7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2pDLGdFQUFhQTs7Ozs7Ozs7OzswQkFFaEIsOERBQUNnQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQy9CLCtDQUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQixvQ0FBRztNQWhEVU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yLnRzeD81OTZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgZmFicmljIH0gZnJvbSBcImZhYnJpY1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0XCI7XHJcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gXCIuL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBFbGVtZW50c1BhbmVsIH0gZnJvbSBcIi4vcGFuZWxzL0VsZW1lbnRzUGFuZWxcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IHsgVGltZUxpbmUgfSBmcm9tIFwiLi9UaW1lTGluZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAL3N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCBcIkAvdXRpbHMvZmFicmljLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yV2l0aFN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdG9yZV0gPSB1c2VTdGF0ZShuZXcgU3RvcmUoKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT5cclxuICAgICAgPEVkaXRvcj48L0VkaXRvcj5cclxuICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3IgPSBvYnNlcnZlcigoKSA9PiB7XHJcbiAgY29uc3Qgc3RvcmUgPSBSZWFjdC51c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhcImNhbnZhc1wiLCB7XHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB3aWR0aDogMTAwMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZGVkZWRcIixcclxuICAgICAgY29sb3IgOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLnRyYW5zcGFyZW50Q29ybmVycyA9IGZhbHNlO1xyXG4gICAgZmFicmljLk9iamVjdC5wcm90b3R5cGUuY29ybmVyQ29sb3IgPSBcIiMwMGEwZjVcIjtcclxuICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLmNvcm5lclN0eWxlID0gXCJjaXJjbGVcIjtcclxuICAgIGZhYnJpYy5PYmplY3QucHJvdG90eXBlLmNvcm5lclN0cm9rZUNvbG9yID0gXCIjMDA2M2Q4XCI7XHJcbiAgICBmYWJyaWMuT2JqZWN0LnByb3RvdHlwZS5jb3JuZXJTaXplID0gMTA7XHJcbiAgICAvLyBjYW52YXMgbW91c2UgZG93biB3aXRob3V0IHRhcmdldCBzaG91bGQgZGVzZWxlY3QgYWN0aXZlIG9iamVjdFxyXG4gICAgY2FudmFzLm9uKFwibW91c2U6ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoIWUudGFyZ2V0KSB7XHJcbiAgICAgICAgc3RvcmUuc2V0U2VsZWN0ZWRFbGVtZW50KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdG9yZS5zZXRDYW52YXMoY2FudmFzKTtcclxuICAgIGZhYnJpYy51dGlsLnJlcXVlc3RBbmltRnJhbWUoZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgIGZhYnJpYy51dGlsLnJlcXVlc3RBbmltRnJhbWUocmVuZGVyKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy1bNTAwcHhfMWZyXzIwcHhdIGdyaWQtY29scy1bNzJweF8zMDBweF8xZnJfMjUwcHhdIGgtWzEwMHN2aF1cIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZSByb3ctc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8TWVudSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctc2Nyb2xsXCI+XHJcbiAgICAgICAgPFJlc291cmNlcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImdyaWQtY2FudmFzLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNvbC1zdGFydC0zIGJnLXNsYXRlLTEwMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC00IHJvdy1zdGFydC0xXCI+XHJcbiAgICAgICAgPEVsZW1lbnRzUGFuZWwgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTMgcm93LXN0YXJ0LTIgY29sLXNwYW4tMiByZWxhdGl2ZSBweC1bMTBweF0gcHktWzRweF0gb3ZlcmZsb3ctc2Nyb2xsXCI+XHJcbiAgICAgICAgPFRpbWVMaW5lIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJmYWJyaWMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmVDb250ZXh0Iiwib2JzZXJ2ZXIiLCJSZXNvdXJjZXMiLCJFbGVtZW50c1BhbmVsIiwiTWVudSIsIlRpbWVMaW5lIiwiU3RvcmUiLCJFZGl0b3JXaXRoU3RvcmUiLCJzdG9yZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJFZGl0b3IiLCJ1c2VDb250ZXh0IiwiY2FudmFzIiwiQ2FudmFzIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRyYW5zcGFyZW50Q29ybmVycyIsImNvcm5lckNvbG9yIiwiY29ybmVyU3R5bGUiLCJjb3JuZXJTdHJva2VDb2xvciIsImNvcm5lclNpemUiLCJvbiIsImUiLCJ0YXJnZXQiLCJzZXRTZWxlY3RlZEVsZW1lbnQiLCJzZXRDYW52YXMiLCJ1dGlsIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlbmRlciIsInJlbmRlckFsbCIsImRpdiIsImNsYXNzTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Editor.tsx\n"));

/***/ })

});