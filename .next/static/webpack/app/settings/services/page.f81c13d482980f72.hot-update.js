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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popups.module.css */ \"(app-pages-browser)/./src/app/Popups/Popups.module.css\");\n/* harmony import */ var _Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Popups_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var _reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_reuseableComponent/OpicityButton */ \"(app-pages-browser)/./src/app/_reuseableComponent/OpicityButton.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/Images/profilepic.png */ \"(app-pages-browser)/./public/Images/profilepic.png\");\n/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/helper */ \"(app-pages-browser)/./src/api/helper.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AddClients = (param)=>{\n    let { handleClose } = param;\n    _s();\n    const [clientData, setclientData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getApiClinent = async (data)=>{\n        try {\n            const getData = await (0,_api_helper__WEBPACK_IMPORTED_MODULE_7__.getClinent)(data);\n            console.log(getData.data.data.getAllClientData, \"=====hereee\");\n            setclientData(getData.data.data.getAllClientData);\n        } catch (error) {\n            console.log(error, \"====error\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getApiClinent();\n        return ()=>{\n            console.log(\"clear function\");\n            console.log(clientData, \"===clientData\");\n        };\n    }, []);\n    const group1 = [\n        {\n            id: 1,\n            name: \"Eloise Robinson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 2,\n            name: \"Franky Williamson\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 3,\n            name: \"Bronson Glass\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 4,\n            name: \"Monroe Benjamin\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group2 = [\n        {\n            id: 5,\n            name: \"Samuel O'Brien\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            id: 6,\n            name: \"Morgan Warren\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const group3 = [\n        {\n            id: 7,\n            name: \"Jonathan Andrews\",\n            avatar: _public_Images_profilepic_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    const [selectedClients, setSelectedClients] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleToggleClient = (id)=>{\n        setSelectedClients((prevSelected)=>prevSelected.includes(id) ? prevSelected.filter((clientId)=>clientId !== id) : [\n                ...prevSelected,\n                id\n            ]);\n    };\n    const renderClientGroup = (clients)=>clients.map((client)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        height: 35,\n                        width: 35,\n                        src: client.avatar,\n                        alt: client.name,\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientInfo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().Clientsname),\n                                children: client.name\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: selectedClients.includes(client.id),\n                                onChange: ()=>handleToggleClient(client.id)\n                            }, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, client.id, true, {\n                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupDisplay),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().space_div),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                width: 100\n                            },\n                            onClick: handleClose,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.LeftArrow, {}, void 0, false, {\n                                fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                lineNumber: 78,\n                                columnNumber: 54\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().popheadertxt),\n                            children: \"Add Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: 30\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 53\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public__WEBPACK_IMPORTED_MODULE_3__.FilterIcon, {}, void 0, false, {\n                                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 79\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().clientList),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt2),\n                            children: \"A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt),\n                            children: \"B\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group2),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().albhabate_txt),\n                            children: \"C\"\n                        }, void 0, false, {\n                            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        renderClientGroup(group3)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reuseableComponent_OpicityButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: \"Select Clients\",\n                    txtstyle: {\n                        color: \"#FFF\"\n                    },\n                    additionalMainDivClassName: (_Popups_module_css__WEBPACK_IMPORTED_MODULE_2___default().AddClientButton)\n                }, void 0, false, {\n                    fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n                    lineNumber: 91,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/testingdemo/Desktop/projects/woofitweb/src/app/Popups/AddClients.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddClients, \"UBs70EgE5KW3Akz72syl1suUrRA=\");\n_c = AddClients;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddClients);\nvar _c;\n$RefreshReg$(_c, \"AddClients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUG9wdXBzL0FkZENsaWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNWO0FBQ3NDO0FBQ2I7QUFDbkM7QUFDbUM7QUFDcEI7QUFFOUMsTUFBTVksYUFBYTtRQUFDLEVBQUdDLFdBQVcsRUFBRTs7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTWMsZ0JBQWdCLE9BQU9DO1FBQzNCLElBQUk7WUFDRixNQUFNQyxVQUFVLE1BQU1QLHVEQUFVQSxDQUFDTTtZQUNqQ0UsUUFBUUMsR0FBRyxDQUFDRixRQUFRRCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksZ0JBQWdCLEVBQUM7WUFDL0NOLGNBQWNHLFFBQVFELElBQUksQ0FBQ0EsSUFBSSxDQUFDSSxnQkFBZ0I7UUFDbEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQ0UsT0FBTztRQUNyQjtJQUNGO0lBRUFyQixnREFBU0EsQ0FBQztRQUNSZTtRQUVBLE9BQU87WUFDUEcsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ04sWUFBVztRQUN2QjtJQUNGLEdBQUcsRUFBRTtJQUdMLE1BQU1TLFNBQVM7UUFDYjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07WUFBbUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUN6RDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBcUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUMzRDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBaUJDLFFBQVFoQixxRUFBY0E7UUFBQztRQUN2RDtZQUFFYyxJQUFJO1lBQUdDLE1BQU07WUFBbUJDLFFBQVFoQixxRUFBY0E7UUFBQztLQUMxRDtJQUVELE1BQU1pQixTQUFTO1FBQ2I7WUFBRUgsSUFBSTtZQUFHQyxNQUFNO1lBQW1CQyxRQUFRaEIscUVBQWNBO1FBQUM7UUFDekQ7WUFBRWMsSUFBSTtZQUFHQyxNQUFNO1lBQWlCQyxRQUFRaEIscUVBQWNBO1FBQUM7S0FDeEQ7SUFFRCxNQUFNa0IsU0FBUztRQUNiO1lBQUVKLElBQUk7WUFBR0MsTUFBTTtZQUFvQkMsUUFBUWhCLHFFQUFjQTtRQUFDO0tBQzNEO0lBRUQsTUFBTSxDQUFDbUIsaUJBQWlCQyxtQkFBbUIsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTTZCLHFCQUFxQixDQUFDUDtRQUMxQk0sbUJBQW1CLENBQUNFLGVBQ2xCQSxhQUFhQyxRQUFRLENBQUNULE1BQ2xCUSxhQUFhRSxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsYUFBYVgsTUFDL0M7bUJBQUlRO2dCQUFjUjthQUFHO0lBRTdCO0lBQ0EsTUFBTVksb0JBQW9CLENBQUNDLFVBQ3pCQSxRQUFRQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1gsOERBQUNDO2dCQUFvQkMsV0FBV3RDLHNFQUFpQjs7a0NBQy9DLDhEQUFDTSxrREFBS0E7d0JBQUNrQyxRQUFRO3dCQUFJQyxPQUFPO3dCQUFJQyxLQUFLTixPQUFPYixNQUFNO3dCQUFFb0IsS0FBS1AsT0FBT2QsSUFBSTt3QkFBRWdCLFdBQVd0QyxrRUFBYTs7Ozs7O2tDQUM1Riw4REFBQ3FDO3dCQUFJQyxXQUFXdEMsc0VBQWlCOzswQ0FDL0IsOERBQUM2QztnQ0FBS1AsV0FBV3RDLHVFQUFrQjswQ0FBR29DLE9BQU9kLElBQUk7Ozs7OzswQ0FDakQsOERBQUN5QjtnQ0FDQ0MsTUFBSztnQ0FDTEMsU0FBU3ZCLGdCQUFnQkksUUFBUSxDQUFDTSxPQUFPZixFQUFFO2dDQUMzQzZCLFVBQVUsSUFBTXRCLG1CQUFtQlEsT0FBT2YsRUFBRTs7Ozs7Ozs7Ozs7OztlQVB4Q2UsT0FBT2YsRUFBRTs7Ozs7SUFhdkIscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFXdEMsd0VBQW1CO2tCQUNqQyw0RUFBQ3FDO1lBQUlDLFdBQVd0Qyx3RUFBbUI7OzhCQUVuQyw4REFBQ3FDO29CQUFJQyxXQUFXdEMscUVBQWdCOztzQ0FDaEMsOERBQUNxQzs0QkFBSWlCLE9BQU87Z0NBQUNiLE9BQU07NEJBQUc7NEJBQUdjLFNBQVM3QztzQ0FBYSw0RUFBQ1AsOENBQVNBOzs7Ozs7Ozs7O3NDQUNyRCw4REFBQ2tDOzRCQUFJQyxXQUFXdEMsd0VBQW1CO3NDQUFFOzs7Ozs7c0NBQ3JDLDhEQUFDcUM7NEJBQUlDLFdBQVd0QywrREFBVTs7OENBQUcsOERBQUNJLCtDQUFVQTs7Ozs7OENBQUUsOERBQUNpQztvQ0FBSWlCLE9BQU87d0NBQUNiLE9BQU07b0NBQUU7Ozs7OztnQ0FBSTs4Q0FBQyw4REFBQ3ZDLCtDQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pGLDhEQUFDbUM7b0JBQUlDLFdBQVd0QyxzRUFBaUI7O3NDQUMvQiw4REFBQ3FDOzRCQUFJQyxXQUFXdEMsMEVBQXFCO3NDQUFFOzs7Ozs7d0JBQ3RDaUMsa0JBQWtCYjtzQ0FDbkIsOERBQUNpQjs0QkFBSUMsV0FBV3RDLHlFQUFvQjtzQ0FBRTs7Ozs7O3dCQUNyQ2lDLGtCQUFrQlQ7c0NBQ25CLDhEQUFDYTs0QkFBSUMsV0FBV3RDLHlFQUFvQjtzQ0FBRTs7Ozs7O3dCQUNyQ2lDLGtCQUFrQlI7Ozs7Ozs7OEJBRXZCLDhEQUFDcEIseUVBQWNBO29CQUNmaUIsTUFBSztvQkFDTHVDLFVBQVU7d0JBQUNDLE9BQU07b0JBQU07b0JBQ1RDLDRCQUE0Qi9ELDJFQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEU7R0F6Rk1TO0tBQUFBO0FBMkZOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvUG9wdXBzL0FkZENsaWVudHMuanM/YzViZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3B1cHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBDcm9zc0ljb24sIEZpbHRlckljb24sIExlZnRBcnJvdywgU2VhcmNoSWNvbiB9IGZyb20gJy4uLy4uLy4uL3B1YmxpYyc7XG5pbXBvcnQgT3B0aWNpdHlCdXR0b24gZnJvbSAnLi4vX3JldXNlYWJsZUNvbXBvbmVudC9PcGljaXR5QnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBwcm9maWxlcGljdHVyZSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvSW1hZ2VzL3Byb2ZpbGVwaWMucG5nJ1xuaW1wb3J0IHsgZ2V0Q2xpbmVudCB9IGZyb20gJy4uLy4uL2FwaS9oZWxwZXInO1xuXG5jb25zdCBBZGRDbGllbnRzID0gKHsgIGhhbmRsZUNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2NsaWVudERhdGEsIHNldGNsaWVudERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgZ2V0QXBpQ2xpbmVudCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBnZXRDbGluZW50KGRhdGEpXG4gICAgICBjb25zb2xlLmxvZyhnZXREYXRhLmRhdGEuZGF0YS5nZXRBbGxDbGllbnREYXRhLCc9PT09PWhlcmVlZScpXG4gICAgICBzZXRjbGllbnREYXRhKGdldERhdGEuZGF0YS5kYXRhLmdldEFsbENsaWVudERhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAnPT09PWVycm9yJylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFwaUNsaW5lbnQoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyIGZ1bmN0aW9uXCIpXG4gICAgY29uc29sZS5sb2coY2xpZW50RGF0YSwnPT09Y2xpZW50RGF0YScpXG4gICAgfVxuICB9LCBbXSlcbiAgXG5cbiAgY29uc3QgZ3JvdXAxID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6ICdFbG9pc2UgUm9iaW5zb24nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0ZyYW5reSBXaWxsaWFtc29uJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICAgIHsgaWQ6IDMsIG5hbWU6ICdCcm9uc29uIEdsYXNzJywgYXZhdGFyOiBwcm9maWxlcGljdHVyZSB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6ICdNb25yb2UgQmVuamFtaW4nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gIF07XG4gIFxuICBjb25zdCBncm91cDIgPSBbXG4gICAgeyBpZDogNSwgbmFtZTogJ1NhbXVlbCBPXFwnQnJpZW4nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gICAgeyBpZDogNiwgbmFtZTogJ01vcmdhbiBXYXJyZW4nLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gIF07XG4gIFxuICBjb25zdCBncm91cDMgPSBbXG4gICAgeyBpZDogNywgbmFtZTogJ0pvbmF0aGFuIEFuZHJld3MnLCBhdmF0YXI6IHByb2ZpbGVwaWN0dXJlIH0sXG4gIF07XG4gIFxuICBjb25zdCBbc2VsZWN0ZWRDbGllbnRzLCBzZXRTZWxlY3RlZENsaWVudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNsaWVudCA9IChpZCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2xpZW50cygocHJldlNlbGVjdGVkKSA9PlxuICAgICAgcHJldlNlbGVjdGVkLmluY2x1ZGVzKGlkKVxuICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoKGNsaWVudElkKSA9PiBjbGllbnRJZCAhPT0gaWQpXG4gICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgaWRdXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyQ2xpZW50R3JvdXAgPSAoY2xpZW50cykgPT4gKFxuICAgIGNsaWVudHMubWFwKChjbGllbnQpID0+IChcbiAgICAgIDxkaXYga2V5PXtjbGllbnQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEl0ZW19PlxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PXszNX0gd2lkdGg9ezM1fSBzcmM9e2NsaWVudC5hdmF0YXJ9IGFsdD17Y2xpZW50Lm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJbmZvfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5DbGllbnRzbmFtZX0+e2NsaWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZENsaWVudHMuaW5jbHVkZXMoY2xpZW50LmlkKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVUb2dnbGVDbGllbnQoY2xpZW50LmlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cERpc3BsYXl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cENvbnRlbnR9PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlX2Rpdn0+XG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MTAwfX0gb25DbGljaz17aGFuZGxlQ2xvc2V9PjxMZWZ0QXJyb3cvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9waGVhZGVydHh0fT5BZGQgQ2xpZW50czwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fSA+PFNlYXJjaEljb24vPjxkaXYgc3R5bGU9e3t3aWR0aDozMH19Lz4gPEZpbHRlckljb24vPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudExpc3R9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxiaGFiYXRlX3R4dDJ9PkE8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyQ2xpZW50R3JvdXAoZ3JvdXAxKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYmhhYmF0ZV90eHR9PkI8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyQ2xpZW50R3JvdXAoZ3JvdXAyKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYmhhYmF0ZV90eHR9PkM8L2Rpdj5cbiAgICAgICAgICB7cmVuZGVyQ2xpZW50R3JvdXAoZ3JvdXAzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8T3B0aWNpdHlCdXR0b25cbiAgICAgIG5hbWU9XCJTZWxlY3QgQ2xpZW50c1wiXG4gICAgICB0eHRzdHlsZT17e2NvbG9yOicjRkZGJ319XG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNYWluRGl2Q2xhc3NOYW1lPXtzdHlsZXMuQWRkQ2xpZW50QnV0dG9ufVxuICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENsaWVudHMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNyb3NzSWNvbiIsIkZpbHRlckljb24iLCJMZWZ0QXJyb3ciLCJTZWFyY2hJY29uIiwiT3B0aWNpdHlCdXR0b24iLCJJbWFnZSIsInByb2ZpbGVwaWN0dXJlIiwiZ2V0Q2xpbmVudCIsIkFkZENsaWVudHMiLCJoYW5kbGVDbG9zZSIsImNsaWVudERhdGEiLCJzZXRjbGllbnREYXRhIiwiZ2V0QXBpQ2xpbmVudCIsImRhdGEiLCJnZXREYXRhIiwiY29uc29sZSIsImxvZyIsImdldEFsbENsaWVudERhdGEiLCJlcnJvciIsImdyb3VwMSIsImlkIiwibmFtZSIsImF2YXRhciIsImdyb3VwMiIsImdyb3VwMyIsInNlbGVjdGVkQ2xpZW50cyIsInNldFNlbGVjdGVkQ2xpZW50cyIsImhhbmRsZVRvZ2dsZUNsaWVudCIsInByZXZTZWxlY3RlZCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiY2xpZW50SWQiLCJyZW5kZXJDbGllbnRHcm91cCIsImNsaWVudHMiLCJtYXAiLCJjbGllbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnRJdGVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJhbHQiLCJjbGllbnRJbmZvIiwic3BhbiIsIkNsaWVudHNuYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwicG9wdXBEaXNwbGF5IiwicG9wdXBDb250ZW50Iiwic3BhY2VfZGl2Iiwic3R5bGUiLCJvbkNsaWNrIiwicG9waGVhZGVydHh0Iiwicm93IiwiY2xpZW50TGlzdCIsImFsYmhhYmF0ZV90eHQyIiwiYWxiaGFiYXRlX3R4dCIsInR4dHN0eWxlIiwiY29sb3IiLCJhZGRpdGlvbmFsTWFpbkRpdkNsYXNzTmFtZSIsIkFkZENsaWVudEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Popups/AddClients.js\n"));

/***/ })

});