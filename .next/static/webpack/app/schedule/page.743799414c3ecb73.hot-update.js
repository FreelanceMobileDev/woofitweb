"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/schedule/page",{

/***/ "(app-pages-browser)/./src/app/Popups/AddClients.js":
/*!**************************************!*\
  !*** ./src/app/Popups/AddClients.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popups.module.css */ \"(app-pages-browser)/./src/app/Popups/Popups.module.css\");\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popups_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var _reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_reuseableComponent/OpicityButton */ \"(app-pages-browser)/./src/app/_reuseableComponent/OpicityButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/Images/profilepic.png */ \"(app-pages-browser)/./public/Images/profilepic.png\");\n/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/helper */ \"(app-pages-browser)/./src/api/helper.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AddClients = (param)=>{\n    let { handleClose } = param;\n    _s();\n    const [clientData, setclientData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getApiClinent = async (data)=>{\n        try {\n            const getData = await (0,_api_helper__WEBPACK_IMPORTED_MODULE_7__.getClinent)(data);\n            console.log(getData.data.data.getAllClientData, \"=====hereee\");\n            setclientData(getData.data.data.getAllClientData);\n        } catch (error) {\n            console.log(error, \"====error\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiClinent();\n        return ()=>{\n            console.log(\"clear function\");\n            console.log(clientData, \"===clientData\");\n        };\n    }, []);\n    const group1 = [\n        {\n            id: 1,\n            name: \"Eloise Robinson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 2,\n            name: \"Franky Williamson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 3,\n            name: \"Bronson Glass\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 4,\n            name: \"Monroe Benjamin\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group2 = [\n        {\n            id: 5,\n            name: \"Samuel O'Brien\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 6,\n            name: \"Morgan Warren\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group3 = [\n        {\n            id: 7,\n            name: \"Jonathan Andrews\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const [selectedClients, setSelectedClients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleToggleClient = (id)=>{\n        setSelectedClients((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((clientId)=>clientId !== id) : [\n                ...prevSelected,\n                id\n            ]);\n    };\n    const renderClientGroup = (clients)=>clientData.map((client)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        height: 35,\n                        width: 35,\n                        src: client.avatar,\n                        alt: client.name,\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientInfo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().Clientsname),\n                                children: client.name\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedClients.includes(client.id),\n                                onChange: ()=>handleToggleClient(client.id)\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, client.id, true, {\n                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupDisplay),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().space_div),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: 100\n                            },\n                            onClick: handleClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.LeftArrow, {}, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 78,\n                                columnNumber: 54\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popheadertxt),\n                            children: \"Add Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: 30\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 53\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 79\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientList),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt2),\n                            children: \"A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt),\n                            children: \"B\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group2),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt),\n                            children: \"C\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group3)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: \"Select Clients\",\n                    txtstyle: {\n                        color: \"#FFF\"\n                    },\n                    additionalMainDivClassName: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().AddClientButton)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 91,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddClients, \"UBs70EgE5KW3Akz72syl1suUrRA=\");\n_c = AddClients;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddClients);\nvar _c;\n$RefreshReg$(_c, \"AddClients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9wdXBzL0FkZENsaWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNWO0FBQ3NDO0FBQ2I7QUFDbkM7QUFDbUM7QUFDcEI7QUFFOUMsTUFBTVksYUFBYTtRQUFDLEVBQUdDLFdBQVcsRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTWMsZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUk7WUFDRixNQUFNQyxVQUFVLE1BQU1QLHVEQUFVQSxDQUFDTTtZQUNqQ0UsUUFBUUMsR0FBRyxDQUFDRixRQUFRRCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksZ0JBQWdCLEVBQUM7WUFDL0NOLGNBQWNHLFFBQVFELElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxnQkFBZ0I7UUFDbEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQ0UsT0FBTztRQUNyQjtJQUNGO0lBRUFyQixnREFBU0EsQ0FBQztRQUNSZTtRQUVBLE9BQU87WUFDUEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ04sWUFBVztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUdMLE1BQU1TLFNBQVM7UUFDYjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBbUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUN6RDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBcUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUMzRDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBaUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUN2RDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBbUJDLFFBQVFoQixxRUFBY0E7UUFBQztLQUMxRDtJQUVELE1BQU1pQixTQUFTO1FBQ2I7WUFBRUgsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxRQUFRaEIscUVBQWNBO1FBQUM7UUFDekQ7WUFBRWMsSUFBSTtZQUFHQyxNQUFNO1lBQWlCQyxRQUFRaEIscUVBQWNBO1FBQUM7S0FDeEQ7SUFFRCxNQUFNa0IsU0FBUztRQUNiO1lBQUVKLElBQUk7WUFBR0MsTUFBTTtZQUFvQkMsUUFBUWhCLHFFQUFjQTtRQUFDO0tBQzNEO0lBRUQsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTTZCLHFCQUFxQixDQUFDUDtRQUMxQk0sbUJBQW1CLENBQUNFLGVBQ2xCQSxhQUFhQyxRQUFRLENBQUNULE1BQ2xCUSxhQUFhRSxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsYUFBYVgsTUFDL0M7bUJBQUlRO2dCQUFjUjthQUFHO0lBRTdCO0lBQ0EsTUFBTVksb0JBQW9CLENBQUNDLFVBQ3pCdkIsV0FBV3dCLEdBQUcsQ0FBQyxDQUFDQyx1QkFDZCw4REFBQ0M7Z0JBQW9CQyxXQUFXdEMsc0VBQWlCOztrQ0FDL0MsOERBQUNNLGtEQUFLQTt3QkFBQ2tDLFFBQVE7d0JBQUlDLE9BQU87d0JBQUlDLEtBQUtOLE9BQU9iLE1BQU07d0JBQUVvQixLQUFLUCxPQUFPZCxJQUFJO3dCQUFFZ0IsV0FBV3RDLGtFQUFhOzs7Ozs7a0NBQzVGLDhEQUFDcUM7d0JBQUlDLFdBQVd0QyxzRUFBaUI7OzBDQUMvQiw4REFBQzZDO2dDQUFLUCxXQUFXdEMsdUVBQWtCOzBDQUFHb0MsT0FBT2QsSUFBSTs7Ozs7OzBDQUNqRCw4REFBQ3lCO2dDQUNDQyxNQUFLO2dDQUNMQyxTQUFTdkIsZ0JBQWdCSSxRQUFRLENBQUNNLE9BQU9mLEVBQUU7Z0NBQzNDNkIsVUFBVSxJQUFNdEIsbUJBQW1CUSxPQUFPZixFQUFFOzs7Ozs7Ozs7Ozs7O2VBUHhDZSxPQUFPZixFQUFFOzs7OztJQWF2QixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVd0Qyx3RUFBbUI7a0JBQ2pDLDRFQUFDcUM7WUFBSUMsV0FBV3RDLHdFQUFtQjs7OEJBRW5DLDhEQUFDcUM7b0JBQUlDLFdBQVd0QyxxRUFBZ0I7O3NDQUNoQyw4REFBQ3FDOzRCQUFJaUIsT0FBTztnQ0FBQ2IsT0FBTTs0QkFBRzs0QkFBR2MsU0FBUzdDO3NDQUFhLDRFQUFDUCw4Q0FBU0E7Ozs7Ozs7Ozs7c0NBQ3JELDhEQUFDa0M7NEJBQUlDLFdBQVd0Qyx3RUFBbUI7c0NBQUU7Ozs7OztzQ0FDckMsOERBQUNxQzs0QkFBSUMsV0FBV3RDLCtEQUFVOzs4Q0FBRyw4REFBQ0ksK0NBQVVBOzs7Ozs4Q0FBRSw4REFBQ2lDO29DQUFJaUIsT0FBTzt3Q0FBQ2IsT0FBTTtvQ0FBRTs7Ozs7O2dDQUFJOzhDQUFDLDhEQUFDdkMsK0NBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHakYsOERBQUNtQztvQkFBSUMsV0FBV3RDLHNFQUFpQjs7c0NBQy9CLDhEQUFDcUM7NEJBQUlDLFdBQVd0QywwRUFBcUI7c0NBQUU7Ozs7Ozt3QkFDdENpQyxrQkFBa0JiO3NDQUNuQiw4REFBQ2lCOzRCQUFJQyxXQUFXdEMseUVBQW9CO3NDQUFFOzs7Ozs7d0JBQ3JDaUMsa0JBQWtCVDtzQ0FDbkIsOERBQUNhOzRCQUFJQyxXQUFXdEMseUVBQW9CO3NDQUFFOzs7Ozs7d0JBQ3JDaUMsa0JBQWtCUjs7Ozs7Ozs4QkFFdkIsOERBQUNwQix5RUFBY0E7b0JBQ2ZpQixNQUFLO29CQUNMdUMsVUFBVTt3QkFBQ0MsT0FBTTtvQkFBTTtvQkFDVEMsNEJBQTRCL0QsMkVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQXpGTVM7S0FBQUE7QUEyRk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qb3B1cHMvQWRkQ2xpZW50cy5qcz9jNWJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BvcHVwcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IENyb3NzSWNvbiwgRmlsdGVySWNvbiwgTGVmdEFycm93LCBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vLi4vcHVibGljJztcbmltcG9ydCBPcHRpY2l0eUJ1dHRvbiBmcm9tICcuLi9fcmV1c2VhYmxlQ29tcG9uZW50L09waWNpdHlCdXR0b24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHByb2ZpbGVwaWN0dXJlIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9JbWFnZXMvcHJvZmlsZXBpYy5wbmcnXG5pbXBvcnQgeyBnZXRDbGluZW50IH0gZnJvbSAnLi4vLi4vYXBpL2hlbHBlcic7XG5cbmNvbnN0IEFkZENsaWVudHMgPSAoeyAgaGFuZGxlQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY2xpZW50RGF0YSwgc2V0Y2xpZW50RGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBnZXRBcGlDbGluZW50ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGdldENsaW5lbnQoZGF0YSlcbiAgICAgIGNvbnNvbGUubG9nKGdldERhdGEuZGF0YS5kYXRhLmdldEFsbENsaWVudERhdGEsJz09PT09aGVyZWVlJylcbiAgICAgIHNldGNsaWVudERhdGEoZ2V0RGF0YS5kYXRhLmRhdGEuZ2V0QWxsQ2xpZW50RGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IsICc9PT09ZXJyb3InKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXBpQ2xpbmVudCgpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgZnVuY3Rpb25cIilcbiAgICBjb25zb2xlLmxvZyhjbGllbnREYXRhLCc9PT1jbGllbnREYXRhJylcbiAgICB9XG4gIH0sIFtdKVxuICBcblxuICBjb25zdCBncm91cDEgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0Vsb2lzZSBSb2JpbnNvbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnRnJhbmt5IFdpbGxpYW1zb24nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ0Jyb25zb24gR2xhc3MnLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogNCwgbmFtZTogJ01vbnJvZSBCZW5qYW1pbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGdyb3VwMiA9IFtcbiAgICB7IGlkOiA1LCBuYW1lOiAnU2FtdWVsIE9cXCdCcmllbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiA2LCBuYW1lOiAnTW9yZ2FuIFdhcnJlbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGdyb3VwMyA9IFtcbiAgICB7IGlkOiA3LCBuYW1lOiAnSm9uYXRoYW4gQW5kcmV3cycsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IFtzZWxlY3RlZENsaWVudHMsIHNldFNlbGVjdGVkQ2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ2xpZW50ID0gKGlkKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDbGllbnRzKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoY2xpZW50SWQpID0+IGNsaWVudElkICE9PSBpZClcbiAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpZF1cbiAgICApO1xuICB9O1xuICBjb25zdCByZW5kZXJDbGllbnRHcm91cCA9IChjbGllbnRzKSA9PiAoXG4gICAgY2xpZW50RGF0YS5tYXAoKGNsaWVudCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2NsaWVudC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SXRlbX0+XG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9ezM1fSB3aWR0aD17MzV9IHNyYz17Y2xpZW50LmF2YXRhcn0gYWx0PXtjbGllbnQubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEluZm99PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLkNsaWVudHNuYW1lfT57Y2xpZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ2xpZW50cy5pbmNsdWRlcyhjbGllbnQuaWQpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZVRvZ2dsZUNsaWVudChjbGllbnQuaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSlcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwRGlzcGxheX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwQ29udGVudH0+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VfZGl2fT5cbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDoxMDB9fSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+PExlZnRBcnJvdy8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3BoZWFkZXJ0eHR9PkFkZCBDbGllbnRzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9ID48U2VhcmNoSWNvbi8+PGRpdiBzdHlsZT17e3dpZHRoOjMwfX0vPiA8RmlsdGVySWNvbi8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50TGlzdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJoYWJhdGVfdHh0Mn0+QTwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChncm91cDEpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxiaGFiYXRlX3R4dH0+QjwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChncm91cDIpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxiaGFiYXRlX3R4dH0+QzwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChncm91cDMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxPcHRpY2l0eUJ1dHRvblxuICAgICAgbmFtZT1cIlNlbGVjdCBDbGllbnRzXCJcbiAgICAgIHR4dHN0eWxlPXt7Y29sb3I6JyNGRkYnfX1cbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1haW5EaXZDbGFzc05hbWU9e3N0eWxlcy5BZGRDbGllbnRCdXR0b259XG4gICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQ2xpZW50cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ3Jvc3NJY29uIiwiRmlsdGVySWNvbiIsIkxlZnRBcnJvdyIsIlNlYXJjaEljb24iLCJPcHRpY2l0eUJ1dHRvbiIsIkltYWdlIiwicHJvZmlsZXBpY3R1cmUiLCJnZXRDbGluZW50IiwiQWRkQ2xpZW50cyIsImhhbmRsZUNsb3NlIiwiY2xpZW50RGF0YSIsInNldGNsaWVudERhdGEiLCJnZXRBcGlDbGluZW50IiwiZGF0YSIsImdldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsQ2xpZW50RGF0YSIsImVycm9yIiwiZ3JvdXAxIiwiaWQiLCJuYW1lIiwiYXZhdGFyIiwiZ3JvdXAyIiwiZ3JvdXAzIiwic2VsZWN0ZWRDbGllbnRzIiwic2V0U2VsZWN0ZWRDbGllbnRzIiwiaGFuZGxlVG9nZ2xlQ2xpZW50IiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJjbGllbnRJZCIsInJlbmRlckNsaWVudEdyb3VwIiwiY2xpZW50cyIsIm1hcCIsImNsaWVudCIsImRpdiIsImNsYXNzTmFtZSIsImNsaWVudEl0ZW0iLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImFsdCIsImNsaWVudEluZm8iLCJzcGFuIiwiQ2xpZW50c25hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwb3B1cERpc3BsYXkiLCJwb3B1cENvbnRlbnQiLCJzcGFjZV9kaXYiLCJzdHlsZSIsIm9uQ2xpY2siLCJwb3BoZWFkZXJ0eHQiLCJyb3ciLCJjbGllbnRMaXN0IiwiYWxiaGFiYXRlX3R4dDIiLCJhbGJoYWJhdGVfdHh0IiwidHh0c3R5bGUiLCJjb2xvciIsImFkZGl0aW9uYWxNYWluRGl2Q2xhc3NOYW1lIiwiQWRkQ2xpZW50QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Popups/AddClients.js\n"));

/***/ })

});