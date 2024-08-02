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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popups.module.css */ \"(app-pages-browser)/./src/app/Popups/Popups.module.css\");\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popups_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var _reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_reuseableComponent/OpicityButton */ \"(app-pages-browser)/./src/app/_reuseableComponent/OpicityButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/Images/profilepic.png */ \"(app-pages-browser)/./public/Images/profilepic.png\");\n/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/helper */ \"(app-pages-browser)/./src/api/helper.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_components/Loader */ \"(app-pages-browser)/./src/app/_components/Loader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AddClients = (param)=>{\n    let { handleClose } = param;\n    _s();\n    const [clientData, setclientData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getApiClinent = async (data)=>{\n        try {\n            setLoading(true);\n            const getData = await (0,_api_helper__WEBPACK_IMPORTED_MODULE_7__.getClinent)(data, \"&sort=asc\");\n            // console.log(getData.data.data.getAllClientData,'=====hereee')\n            setclientData(getData.data.data.getAllClientData);\n        } catch (error) {\n            console.log(error, \"====error\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiClinent(0);\n        return ()=>{\n            console.log(\"clear function\");\n            console.log(clientData, \"===clientData\");\n        };\n    }, []);\n    const group1 = [\n        {\n            id: 1,\n            name: \"Eloise Robinson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 2,\n            name: \"Franky Williamson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 3,\n            name: \"Bronson Glass\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 4,\n            name: \"Monroe Benjamin\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group2 = [\n        {\n            id: 5,\n            name: \"Samuel O'Brien\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 6,\n            name: \"Morgan Warren\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group3 = [\n        {\n            id: 7,\n            name: \"Jonathan Andrews\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const [selectedClients, setSelectedClients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleToggleClient = (id)=>{\n        setSelectedClients((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((clientId)=>clientId !== id) : [\n                ...prevSelected,\n                id\n            ]);\n    };\n    const renderClientGroup = (clients)=>clients.map((client)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        height: 35,\n                        width: 35,\n                        src: client.clientImage ? client.clientImage : _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: client.name,\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientInfo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().Clientsname),\n                                children: client.name\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedClients.includes(client._id),\n                                onChange: ()=>handleToggleClient(client._id)\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, client.id, true, {\n                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupDisplay),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    loading: loading\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().space_div),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: 100\n                            },\n                            onClick: handleClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.LeftArrow, {}, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 84,\n                                columnNumber: 54\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 84,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popheadertxt),\n                            children: \"Add Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: 30\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 53\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 79\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientList),\n                    children: renderClientGroup(clientData)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: \"Select Clients\",\n                    txtstyle: {\n                        color: \"#FFF\"\n                    },\n                    additionalMainDivClassName: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().AddClientButton)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 97,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddClients, \"rQBtFm0FJzu3mFyB9sitQSPypY8=\");\n_c = AddClients;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddClients);\nvar _c;\n$RefreshReg$(_c, \"AddClients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9wdXBzL0FkZENsaWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVjtBQUNzQztBQUNiO0FBQ25DO0FBQ21DO0FBQ3BCO0FBQ0g7QUFFM0MsTUFBTWEsYUFBYTtRQUFDLEVBQUdDLFdBQVcsRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNaUIsZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUk7WUFDRkYsV0FBVztZQUNYLE1BQU1HLFVBQVUsTUFBTVYsdURBQVVBLENBQUNTLE1BQU07WUFDdkMsZ0VBQWdFO1lBQ2hFSixjQUFjSyxRQUFRRCxJQUFJLENBQUNBLElBQUksQ0FBQ0UsZ0JBQWdCO1FBQ2xELEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGLE9BQU87UUFDckIsU0FBUTtZQUNOTCxXQUFXO1FBQ2I7SUFDRjtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUmtCLGNBQWM7UUFFZCxPQUFPO1lBQ1BLLFFBQVFDLEdBQUcsQ0FBQztZQUNaRCxRQUFRQyxHQUFHLENBQUNWLFlBQVc7UUFDdkI7SUFDRixHQUFHLEVBQUU7SUFHTCxNQUFNVyxTQUFTO1FBQ2I7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxRQUFRbkIscUVBQWNBO1FBQUM7UUFDekQ7WUFBRWlCLElBQUk7WUFBR0MsTUFBTTtZQUFxQkMsUUFBUW5CLHFFQUFjQTtRQUFDO1FBQzNEO1lBQUVpQixJQUFJO1lBQUdDLE1BQU07WUFBaUJDLFFBQVFuQixxRUFBY0E7UUFBQztRQUN2RDtZQUFFaUIsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxRQUFRbkIscUVBQWNBO1FBQUM7S0FDMUQ7SUFFRCxNQUFNb0IsU0FBUztRQUNiO1lBQUVILElBQUk7WUFBR0MsTUFBTTtZQUFtQkMsUUFBUW5CLHFFQUFjQTtRQUFDO1FBQ3pEO1lBQUVpQixJQUFJO1lBQUdDLE1BQU07WUFBaUJDLFFBQVFuQixxRUFBY0E7UUFBQztLQUN4RDtJQUVELE1BQU1xQixTQUFTO1FBQ2I7WUFBRUosSUFBSTtZQUFHQyxNQUFNO1lBQW9CQyxRQUFRbkIscUVBQWNBO1FBQUM7S0FDM0Q7SUFFRCxNQUFNLENBQUNzQixpQkFBaUJDLG1CQUFtQixHQUFHL0IsK0NBQVFBLENBQUMsRUFBRTtJQUV6RCxNQUFNZ0MscUJBQXFCLENBQUNQO1FBQzFCTSxtQkFBbUIsQ0FBQ0UsZUFDbEJBLGFBQWFDLFFBQVEsQ0FBQ1QsTUFDbEJRLGFBQWFFLE1BQU0sQ0FBQyxDQUFDQyxXQUFhQSxhQUFhWCxNQUMvQzttQkFBSVE7Z0JBQWNSO2FBQUc7SUFFN0I7SUFDQSxNQUFNWSxvQkFBb0IsQ0FBQ0MsVUFDekJBLFFBQVFDLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWCw4REFBQ0M7Z0JBQW9CQyxXQUFXekMsc0VBQWlCOztrQ0FDL0MsOERBQUNNLGtEQUFLQTt3QkFBQ3FDLFFBQVE7d0JBQUlDLE9BQU87d0JBQUlDLEtBQUtOLE9BQU9PLFdBQVcsR0FBQ1AsT0FBT08sV0FBVyxHQUFDdkMscUVBQWNBO3dCQUFFd0MsS0FBS1IsT0FBT2QsSUFBSTt3QkFBRWdCLFdBQVd6QyxrRUFBYTs7Ozs7O2tDQUNuSSw4REFBQ3dDO3dCQUFJQyxXQUFXekMsc0VBQWlCOzswQ0FDL0IsOERBQUNpRDtnQ0FBS1IsV0FBV3pDLHVFQUFrQjswQ0FBR3VDLE9BQU9kLElBQUk7Ozs7OzswQ0FDakQsOERBQUMwQjtnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBU3hCLGdCQUFnQkksUUFBUSxDQUFDTSxPQUFPZSxHQUFHO2dDQUM1Q0MsVUFBVSxJQUFNeEIsbUJBQW1CUSxPQUFPZSxHQUFHOzs7Ozs7Ozs7Ozs7O2VBUHpDZixPQUFPZixFQUFFOzs7OztJQWF2QixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVd6Qyx3RUFBbUI7a0JBQ2pDLDRFQUFDd0M7WUFBSUMsV0FBV3pDLHdFQUFtQjs7OEJBQ25DLDhEQUFDUywwREFBTUE7b0JBQUNLLFNBQVNBOzs7Ozs7OEJBRWpCLDhEQUFDMEI7b0JBQUlDLFdBQVd6QyxxRUFBZ0I7O3NDQUNoQyw4REFBQ3dDOzRCQUFJbUIsT0FBTztnQ0FBQ2YsT0FBTTs0QkFBRzs0QkFBR2dCLFNBQVNqRDtzQ0FBYSw0RUFBQ1IsOENBQVNBOzs7Ozs7Ozs7O3NDQUNyRCw4REFBQ3FDOzRCQUFJQyxXQUFXekMsd0VBQW1CO3NDQUFFOzs7Ozs7c0NBQ3JDLDhEQUFDd0M7NEJBQUlDLFdBQVd6QywrREFBVTs7OENBQUcsOERBQUNJLCtDQUFVQTs7Ozs7OENBQUUsOERBQUNvQztvQ0FBSW1CLE9BQU87d0NBQUNmLE9BQU07b0NBQUU7Ozs7OztnQ0FBSTs4Q0FBQyw4REFBQzFDLCtDQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pGLDhEQUFDc0M7b0JBQUlDLFdBQVd6QyxzRUFBaUI7OEJBRTlCb0Msa0JBQWtCeEI7Ozs7Ozs4QkFNdkIsOERBQUNQLHlFQUFjQTtvQkFDZm9CLE1BQUs7b0JBQ0x1QyxVQUFVO3dCQUFDQyxPQUFNO29CQUFNO29CQUNUQyw0QkFBNEJsRSwyRUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFO0dBOUZNVTtLQUFBQTtBQWdHTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BvcHVwcy9BZGRDbGllbnRzLmpzP2M1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUG9wdXBzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgQ3Jvc3NJY29uLCBGaWx0ZXJJY29uLCBMZWZ0QXJyb3csIFNlYXJjaEljb24gfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMnO1xuaW1wb3J0IE9wdGljaXR5QnV0dG9uIGZyb20gJy4uL19yZXVzZWFibGVDb21wb25lbnQvT3BpY2l0eUJ1dHRvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgcHJvZmlsZXBpY3R1cmUgZnJvbSAnLi4vLi4vLi4vcHVibGljL0ltYWdlcy9wcm9maWxlcGljLnBuZydcbmltcG9ydCB7IGdldENsaW5lbnQgfSBmcm9tICcuLi8uLi9hcGkvaGVscGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vX2NvbXBvbmVudHMvTG9hZGVyJztcblxuY29uc3QgQWRkQ2xpZW50cyA9ICh7ICBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjbGllbnREYXRhLCBzZXRjbGllbnREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0QXBpQ2xpbmVudCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBnZXRDbGluZW50KGRhdGEsYCZzb3J0PWFzY2ApXG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXREYXRhLmRhdGEuZGF0YS5nZXRBbGxDbGllbnREYXRhLCc9PT09PWhlcmVlZScpXG4gICAgICBzZXRjbGllbnREYXRhKGdldERhdGEuZGF0YS5kYXRhLmdldEFsbENsaWVudERhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnPT09PWVycm9yJylcbiAgICB9ZmluYWxseXtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBcGlDbGluZW50KDApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgZnVuY3Rpb25cIilcbiAgICBjb25zb2xlLmxvZyhjbGllbnREYXRhLCc9PT1jbGllbnREYXRhJylcbiAgICB9XG4gIH0sIFtdKVxuICBcblxuICBjb25zdCBncm91cDEgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0Vsb2lzZSBSb2JpbnNvbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnRnJhbmt5IFdpbGxpYW1zb24nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ0Jyb25zb24gR2xhc3MnLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogNCwgbmFtZTogJ01vbnJvZSBCZW5qYW1pbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGdyb3VwMiA9IFtcbiAgICB7IGlkOiA1LCBuYW1lOiAnU2FtdWVsIE9cXCdCcmllbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgICB7IGlkOiA2LCBuYW1lOiAnTW9yZ2FuIFdhcnJlbicsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGdyb3VwMyA9IFtcbiAgICB7IGlkOiA3LCBuYW1lOiAnSm9uYXRoYW4gQW5kcmV3cycsIGF2YXRhcjogcHJvZmlsZXBpY3R1cmUgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IFtzZWxlY3RlZENsaWVudHMsIHNldFNlbGVjdGVkQ2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ2xpZW50ID0gKGlkKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDbGllbnRzKChwcmV2U2VsZWN0ZWQpID0+XG4gICAgICBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoaWQpXG4gICAgICAgID8gcHJldlNlbGVjdGVkLmZpbHRlcigoY2xpZW50SWQpID0+IGNsaWVudElkICE9PSBpZClcbiAgICAgICAgOiBbLi4ucHJldlNlbGVjdGVkLCBpZF1cbiAgICApO1xuICB9O1xuICBjb25zdCByZW5kZXJDbGllbnRHcm91cCA9IChjbGllbnRzKSA9PiAoXG4gICAgY2xpZW50cy5tYXAoKGNsaWVudCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2NsaWVudC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SXRlbX0+XG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9ezM1fSB3aWR0aD17MzV9IHNyYz17Y2xpZW50LmNsaWVudEltYWdlP2NsaWVudC5jbGllbnRJbWFnZTpwcm9maWxlcGljdHVyZX0gYWx0PXtjbGllbnQubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEluZm99PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLkNsaWVudHNuYW1lfT57Y2xpZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ2xpZW50cy5pbmNsdWRlcyhjbGllbnQuX2lkKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVUb2dnbGVDbGllbnQoY2xpZW50Ll9pZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBEaXNwbGF5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBDb250ZW50fT5cbiAgICAgIDxMb2FkZXIgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZV9kaXZ9PlxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjEwMH19IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT48TGVmdEFycm93Lz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcGhlYWRlcnR4dH0+QWRkIENsaWVudHM8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30gPjxTZWFyY2hJY29uLz48ZGl2IHN0eWxlPXt7d2lkdGg6MzB9fS8+IDxGaWx0ZXJJY29uLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRMaXN0fT5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJoYWJhdGVfdHh0Mn0+QTwvZGl2PiAqL31cbiAgICAgICAgICB7cmVuZGVyQ2xpZW50R3JvdXAoY2xpZW50RGF0YSl9XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxiaGFiYXRlX3R4dH0+QjwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChncm91cDIpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxiaGFiYXRlX3R4dH0+QzwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJDbGllbnRHcm91cChncm91cDMpfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8T3B0aWNpdHlCdXR0b25cbiAgICAgIG5hbWU9XCJTZWxlY3QgQ2xpZW50c1wiXG4gICAgICB0eHRzdHlsZT17e2NvbG9yOicjRkZGJ319XG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNYWluRGl2Q2xhc3NOYW1lPXtzdHlsZXMuQWRkQ2xpZW50QnV0dG9ufVxuICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENsaWVudHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNyb3NzSWNvbiIsIkZpbHRlckljb24iLCJMZWZ0QXJyb3ciLCJTZWFyY2hJY29uIiwiT3B0aWNpdHlCdXR0b24iLCJJbWFnZSIsInByb2ZpbGVwaWN0dXJlIiwiZ2V0Q2xpbmVudCIsIkxvYWRlciIsIkFkZENsaWVudHMiLCJoYW5kbGVDbG9zZSIsImNsaWVudERhdGEiLCJzZXRjbGllbnREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRBcGlDbGluZW50IiwiZGF0YSIsImdldERhdGEiLCJnZXRBbGxDbGllbnREYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXAxIiwiaWQiLCJuYW1lIiwiYXZhdGFyIiwiZ3JvdXAyIiwiZ3JvdXAzIiwic2VsZWN0ZWRDbGllbnRzIiwic2V0U2VsZWN0ZWRDbGllbnRzIiwiaGFuZGxlVG9nZ2xlQ2xpZW50IiwicHJldlNlbGVjdGVkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJjbGllbnRJZCIsInJlbmRlckNsaWVudEdyb3VwIiwiY2xpZW50cyIsIm1hcCIsImNsaWVudCIsImRpdiIsImNsYXNzTmFtZSIsImNsaWVudEl0ZW0iLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImNsaWVudEltYWdlIiwiYWx0IiwiY2xpZW50SW5mbyIsInNwYW4iLCJDbGllbnRzbmFtZSIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJfaWQiLCJvbkNoYW5nZSIsInBvcHVwRGlzcGxheSIsInBvcHVwQ29udGVudCIsInNwYWNlX2RpdiIsInN0eWxlIiwib25DbGljayIsInBvcGhlYWRlcnR4dCIsInJvdyIsImNsaWVudExpc3QiLCJ0eHRzdHlsZSIsImNvbG9yIiwiYWRkaXRpb25hbE1haW5EaXZDbGFzc05hbWUiLCJBZGRDbGllbnRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Popups/AddClients.js\n"));

/***/ })

});