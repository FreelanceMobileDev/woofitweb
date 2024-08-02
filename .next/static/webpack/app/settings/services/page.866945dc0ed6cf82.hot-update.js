"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/settings/services/page",{

/***/ "(app-pages-browser)/./src/app/Popups/AddClients.js":
/*!**************************************!*\
  !*** ./src/app/Popups/AddClients.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popups.module.css */ \"(app-pages-browser)/./src/app/Popups/Popups.module.css\");\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popups_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var _reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_reuseableComponent/OpicityButton */ \"(app-pages-browser)/./src/app/_reuseableComponent/OpicityButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/Images/profilepic.png */ \"(app-pages-browser)/./public/Images/profilepic.png\");\n/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/helper */ \"(app-pages-browser)/./src/api/helper.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_components/Loader */ \"(app-pages-browser)/./src/app/_components/Loader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AddClients = (param)=>{\n    let { handleClose } = param;\n    _s();\n    const [clientData, setclientData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getApiClinent = async (data)=>{\n        try {\n            setLoading(true);\n            const getData = await (0,_api_helper__WEBPACK_IMPORTED_MODULE_7__.getClinent)(data, \"sort=asc\");\n            // console.log(getData.data.data.getAllClientData,'=====hereee')\n            setclientData(getData.data.data.getAllClientData);\n        } catch (error) {\n            console.log(error, \"====error\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiClinent();\n        return ()=>{\n            console.log(\"clear function\");\n            console.log(clientData, \"===clientData\");\n        };\n    }, []);\n    const group1 = [\n        {\n            id: 1,\n            name: \"Eloise Robinson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 2,\n            name: \"Franky Williamson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 3,\n            name: \"Bronson Glass\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 4,\n            name: \"Monroe Benjamin\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group2 = [\n        {\n            id: 5,\n            name: \"Samuel O'Brien\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 6,\n            name: \"Morgan Warren\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group3 = [\n        {\n            id: 7,\n            name: \"Jonathan Andrews\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const [selectedClients, setSelectedClients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleToggleClient = (id)=>{\n        setSelectedClients((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((clientId)=>clientId !== id) : [\n                ...prevSelected,\n                id\n            ]);\n    };\n    const renderClientGroup = (clients)=>clients.map((client)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientItem),\n                children: [\n                    console.log(client, \"====client\"),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        height: 35,\n                        width: 35,\n                        src: client.clientImage ? client.clientImage : _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: client.name,\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientInfo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().Clientsname),\n                                children: client.name\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedClients.includes(client.id),\n                                onChange: ()=>handleToggleClient(client.id)\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, client.id, true, {\n                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupDisplay),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().space_div),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: 100\n                            },\n                            onClick: handleClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.LeftArrow, {}, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 85,\n                                columnNumber: 54\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 85,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popheadertxt),\n                            children: \"Add Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: 30\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 53\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 79\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientList),\n                    children: renderClientGroup(clientData)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: \"Select Clients\",\n                    txtstyle: {\n                        color: \"#FFF\"\n                    },\n                    additionalMainDivClassName: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().AddClientButton)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddClients, \"rQBtFm0FJzu3mFyB9sitQSPypY8=\");\n_c = AddClients;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddClients);\nvar _c;\n$RefreshReg$(_c, \"AddClients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9wdXBzL0FkZENsaWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNzQztBQUNiO0FBQ25DO0FBQ21DO0FBQ3BCO0FBQ0g7QUFFM0MsTUFBTWEsYUFBYTtRQUFDLEVBQUdDLFdBQVcsRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNaUIsZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUk7WUFDRkYsV0FBVztZQUNYLE1BQU1HLFVBQVUsTUFBTVYsdURBQVVBLENBQUNTLE1BQU07WUFDdkMsZ0VBQWdFO1lBQ2hFSixjQUFjSyxRQUFRRCxJQUFJLENBQUNBLElBQUksQ0FBQ0UsZ0JBQWdCO1FBQ2xELEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGLE9BQU87UUFDckIsU0FBUTtZQUNOTCxXQUFXO1FBQ2I7SUFDRjtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUmtCO1FBRUEsT0FBTztZQUNQSyxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDVixZQUFXO1FBQ3ZCO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTVcsU0FBUztRQUNiO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtZQUFtQkMsUUFBUW5CLHFFQUFjQTtRQUFDO1FBQ3pEO1lBQUVpQixJQUFJO1lBQUdDLE1BQU07WUFBcUJDLFFBQVFuQixxRUFBY0E7UUFBQztRQUMzRDtZQUFFaUIsSUFBSTtZQUFHQyxNQUFNO1lBQWlCQyxRQUFRbkIscUVBQWNBO1FBQUM7UUFDdkQ7WUFBRWlCLElBQUk7WUFBR0MsTUFBTTtZQUFtQkMsUUFBUW5CLHFFQUFjQTtRQUFDO0tBQzFEO0lBRUQsTUFBTW9CLFNBQVM7UUFDYjtZQUFFSCxJQUFJO1lBQUdDLE1BQU07WUFBbUJDLFFBQVFuQixxRUFBY0E7UUFBQztRQUN6RDtZQUFFaUIsSUFBSTtZQUFHQyxNQUFNO1lBQWlCQyxRQUFRbkIscUVBQWNBO1FBQUM7S0FDeEQ7SUFFRCxNQUFNcUIsU0FBUztRQUNiO1lBQUVKLElBQUk7WUFBR0MsTUFBTTtZQUFvQkMsUUFBUW5CLHFFQUFjQTtRQUFDO0tBQzNEO0lBRUQsTUFBTSxDQUFDc0IsaUJBQWlCQyxtQkFBbUIsR0FBRy9CLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTWdDLHFCQUFxQixDQUFDUDtRQUMxQk0sbUJBQW1CLENBQUNFLGVBQ2xCQSxhQUFhQyxRQUFRLENBQUNULE1BQ2xCUSxhQUFhRSxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsYUFBYVgsTUFDL0M7bUJBQUlRO2dCQUFjUjthQUFHO0lBRTdCO0lBQ0EsTUFBTVksb0JBQW9CLENBQUNDLFVBQ3pCQSxRQUFRQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1gsOERBQUNDO2dCQUFvQkMsV0FBV3pDLHNFQUFpQjs7b0JBQzlDcUIsUUFBUUMsR0FBRyxDQUFDaUIsUUFBTztrQ0FDcEIsOERBQUNqQyxrREFBS0E7d0JBQUNxQyxRQUFRO3dCQUFJQyxPQUFPO3dCQUFJQyxLQUFLTixPQUFPTyxXQUFXLEdBQUNQLE9BQU9PLFdBQVcsR0FBQ3ZDLHFFQUFjQTt3QkFBRXdDLEtBQUtSLE9BQU9kLElBQUk7d0JBQUVnQixXQUFXekMsa0VBQWE7Ozs7OztrQ0FDbkksOERBQUN3Qzt3QkFBSUMsV0FBV3pDLHNFQUFpQjs7MENBQy9CLDhEQUFDaUQ7Z0NBQUtSLFdBQVd6Qyx1RUFBa0I7MENBQUd1QyxPQUFPZCxJQUFJOzs7Ozs7MENBQ2pELDhEQUFDMEI7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVN4QixnQkFBZ0JJLFFBQVEsQ0FBQ00sT0FBT2YsRUFBRTtnQ0FDM0M4QixVQUFVLElBQU12QixtQkFBbUJRLE9BQU9mLEVBQUU7Ozs7Ozs7Ozs7Ozs7ZUFSeENlLE9BQU9mLEVBQUU7Ozs7O0lBY3ZCLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBV3pDLHdFQUFtQjtrQkFDakMsNEVBQUN3QztZQUFJQyxXQUFXekMsd0VBQW1COzs4QkFDbkMsOERBQUNTLDBEQUFNQTtvQkFBQ0ssU0FBU0E7Ozs7Ozs4QkFFakIsOERBQUMwQjtvQkFBSUMsV0FBV3pDLHFFQUFnQjs7c0NBQ2hDLDhEQUFDd0M7NEJBQUlrQixPQUFPO2dDQUFDZCxPQUFNOzRCQUFHOzRCQUFHZSxTQUFTaEQ7c0NBQWEsNEVBQUNSLDhDQUFTQTs7Ozs7Ozs7OztzQ0FDckQsOERBQUNxQzs0QkFBSUMsV0FBV3pDLHdFQUFtQjtzQ0FBRTs7Ozs7O3NDQUNyQyw4REFBQ3dDOzRCQUFJQyxXQUFXekMsK0RBQVU7OzhDQUFHLDhEQUFDSSwrQ0FBVUE7Ozs7OzhDQUFFLDhEQUFDb0M7b0NBQUlrQixPQUFPO3dDQUFDZCxPQUFNO29DQUFFOzs7Ozs7Z0NBQUk7OENBQUMsOERBQUMxQywrQ0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqRiw4REFBQ3NDO29CQUFJQyxXQUFXekMsc0VBQWlCOzhCQUU5Qm9DLGtCQUFrQnhCOzs7Ozs7OEJBTXZCLDhEQUFDUCx5RUFBY0E7b0JBQ2ZvQixNQUFLO29CQUNMc0MsVUFBVTt3QkFBQ0MsT0FBTTtvQkFBTTtvQkFDVEMsNEJBQTRCakUsMkVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RTtHQS9GTVU7S0FBQUE7QUFpR04sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Qb3B1cHMvQWRkQ2xpZW50cy5qcz9jNWJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BvcHVwcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IENyb3NzSWNvbiwgRmlsdGVySWNvbiwgTGVmdEFycm93LCBTZWFyY2hJY29uIH0gZnJvbSAnLi4vLi4vLi4vcHVibGljJztcbmltcG9ydCBPcHRpY2l0eUJ1dHRvbiBmcm9tICcuLi9fcmV1c2VhYmxlQ29tcG9uZW50L09waWNpdHlCdXR0b24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHByb2ZpbGVwaWN0dXJlIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9JbWFnZXMvcHJvZmlsZXBpYy5wbmcnXG5pbXBvcnQgeyBnZXRDbGluZW50IH0gZnJvbSAnLi4vLi4vYXBpL2hlbHBlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL19jb21wb25lbnRzL0xvYWRlcic7XG5cbmNvbnN0IEFkZENsaWVudHMgPSAoeyAgaGFuZGxlQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbY2xpZW50RGF0YSwgc2V0Y2xpZW50RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldEFwaUNsaW5lbnQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBnZXREYXRhID0gYXdhaXQgZ2V0Q2xpbmVudChkYXRhLGBzb3J0PWFzY2ApXG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXREYXRhLmRhdGEuZGF0YS5nZXRBbGxDbGllbnREYXRhLCc9PT09PWhlcmVlZScpXG4gICAgICBzZXRjbGllbnREYXRhKGdldERhdGEuZGF0YS5kYXRhLmdldEFsbENsaWVudERhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnPT09PWVycm9yJylcbiAgICB9ZmluYWxseXtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBcGlDbGluZW50KClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGVhciBmdW5jdGlvblwiKVxuICAgIGNvbnNvbGUubG9nKGNsaWVudERhdGEsJz09PWNsaWVudERhdGEnKVxuICAgIH1cbiAgfSwgW10pXG4gIFxuXG4gIGNvbnN0IGdyb3VwMSA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiAnRWxvaXNlIFJvYmluc29uJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdGcmFua3kgV2lsbGlhbXNvbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiAnQnJvbnNvbiBHbGFzcycsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiAnTW9ucm9lIEJlbmphbWluJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICBdO1xuICBcbiAgY29uc3QgZ3JvdXAyID0gW1xuICAgIHsgaWQ6IDUsIG5hbWU6ICdTYW11ZWwgT1xcJ0JyaWVuJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICAgIHsgaWQ6IDYsIG5hbWU6ICdNb3JnYW4gV2FycmVuJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICBdO1xuICBcbiAgY29uc3QgZ3JvdXAzID0gW1xuICAgIHsgaWQ6IDcsIG5hbWU6ICdKb25hdGhhbiBBbmRyZXdzJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICBdO1xuICBcbiAgY29uc3QgW3NlbGVjdGVkQ2xpZW50cywgc2V0U2VsZWN0ZWRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVDbGllbnQgPSAoaWQpID0+IHtcbiAgICBzZXRTZWxlY3RlZENsaWVudHMoKHByZXZTZWxlY3RlZCkgPT5cbiAgICAgIHByZXZTZWxlY3RlZC5pbmNsdWRlcyhpZClcbiAgICAgICAgPyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChjbGllbnRJZCkgPT4gY2xpZW50SWQgIT09IGlkKVxuICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWQsIGlkXVxuICAgICk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckNsaWVudEdyb3VwID0gKGNsaWVudHMpID0+IChcbiAgICBjbGllbnRzLm1hcCgoY2xpZW50KSA9PiAoXG4gICAgICA8ZGl2IGtleT17Y2xpZW50LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJdGVtfT5cbiAgICAgICAge2NvbnNvbGUubG9nKGNsaWVudCwnPT09PWNsaWVudCcpfVxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PXszNX0gd2lkdGg9ezM1fSBzcmM9e2NsaWVudC5jbGllbnRJbWFnZT9jbGllbnQuY2xpZW50SW1hZ2U6cHJvZmlsZXBpY3R1cmV9IGFsdD17Y2xpZW50Lm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbmZvfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5DbGllbnRzbmFtZX0+e2NsaWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENsaWVudHMuaW5jbHVkZXMoY2xpZW50LmlkKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVUb2dnbGVDbGllbnQoY2xpZW50LmlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cERpc3BsYXl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cENvbnRlbnR9PlxuICAgICAgPExvYWRlciBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlX2Rpdn0+XG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MTAwfX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PjxMZWZ0QXJyb3cvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9waGVhZGVydHh0fT5BZGQgQ2xpZW50czwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fSA+PFNlYXJjaEljb24vPjxkaXYgc3R5bGU9e3t3aWR0aDozMH19Lz4gPEZpbHRlckljb24vPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudExpc3R9PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYmhhYmF0ZV90eHQyfT5BPC9kaXY+ICovfVxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChjbGllbnREYXRhKX1cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJoYWJhdGVfdHh0fT5CPC9kaXY+XG4gICAgICAgICAge3JlbmRlckNsaWVudEdyb3VwKGdyb3VwMil9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJoYWJhdGVfdHh0fT5DPC9kaXY+XG4gICAgICAgICAge3JlbmRlckNsaWVudEdyb3VwKGdyb3VwMyl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxPcHRpY2l0eUJ1dHRvblxuICAgICAgbmFtZT1cIlNlbGVjdCBDbGllbnRzXCJcbiAgICAgIHR4dHN0eWxlPXt7Y29sb3I6JyNGRkYnfX1cbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1haW5EaXZDbGFzc05hbWU9e3N0eWxlcy5BZGRDbGllbnRCdXR0b259XG4gICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQ2xpZW50cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ3Jvc3NJY29uIiwiRmlsdGVySWNvbiIsIkxlZnRBcnJvdyIsIlNlYXJjaEljb24iLCJPcHRpY2l0eUJ1dHRvbiIsIkltYWdlIiwicHJvZmlsZXBpY3R1cmUiLCJnZXRDbGluZW50IiwiTG9hZGVyIiwiQWRkQ2xpZW50cyIsImhhbmRsZUNsb3NlIiwiY2xpZW50RGF0YSIsInNldGNsaWVudERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldEFwaUNsaW5lbnQiLCJkYXRhIiwiZ2V0RGF0YSIsImdldEFsbENsaWVudERhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJncm91cDEiLCJpZCIsIm5hbWUiLCJhdmF0YXIiLCJncm91cDIiLCJncm91cDMiLCJzZWxlY3RlZENsaWVudHMiLCJzZXRTZWxlY3RlZENsaWVudHMiLCJoYW5kbGVUb2dnbGVDbGllbnQiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImNsaWVudElkIiwicmVuZGVyQ2xpZW50R3JvdXAiLCJjbGllbnRzIiwibWFwIiwiY2xpZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xpZW50SXRlbSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiY2xpZW50SW1hZ2UiLCJhbHQiLCJjbGllbnRJbmZvIiwic3BhbiIsIkNsaWVudHNuYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwicG9wdXBEaXNwbGF5IiwicG9wdXBDb250ZW50Iiwic3BhY2VfZGl2Iiwic3R5bGUiLCJvbkNsaWNrIiwicG9waGVhZGVydHh0Iiwicm93IiwiY2xpZW50TGlzdCIsInR4dHN0eWxlIiwiY29sb3IiLCJhZGRpdGlvbmFsTWFpbkRpdkNsYXNzTmFtZSIsIkFkZENsaWVudEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Popups/AddClients.js\n"));

/***/ })

});