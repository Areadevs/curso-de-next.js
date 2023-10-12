"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/dashboard/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    var _session_data;\n    _s();\n    // const [data, setData] = useState([])\n    // const [err, setErr] = useState(false)\n    // const [isLoading, setIsLoading] = useState(false)\n    // useEffect(() => {\n    //     const getData = async () => {\n    //         setIsLoading(true)\n    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\n    //             cache: \"no-store\",\n    //         })\n    //         if (!res.ok) {\n    //             setErr(true)\n    //         }\n    //         const data = await res.json();\n    //         setData(data)\n    //         setIsLoading(false)\n    //     };\n    //     getData()\n    // }, []);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data, mutate, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/posts?username=\".concat(session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user.name), fetcher);\n    if (session.status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n            lineNumber: 44,\n            columnNumber: 16\n        }, undefined);\n    }\n    if (session.status === \"unauthenticated\") {\n        router === null || router === void 0 ? void 0 : router.push(\"/dashboard/login\");\n    }\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const title = e.target[0].value;\n        const desc = e.target[1].value;\n        const img = e.target[2].value;\n        const content = e.target[3].value;\n        try {\n            await fetch(\"/api/posts\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    title,\n                    desc,\n                    img,\n                    content,\n                    username: session.data.user.name\n                })\n            });\n            mutate();\n            e.target.reset() // reset form after the submit\n            ;\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleDelete = async (id)=>{\n        try {\n            await fetch(\"/api/posts/\".concat(id), {\n                method: \"DELETE\"\n            });\n            mutate();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    if (session.status === \"authenticated\") {\n        console.log(session.status);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().posts),\n                    children: isLoading ? \"loading\" : data === null || data === void 0 ? void 0 : data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().post),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgContainer),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: post.img,\n                                        alt: \"\",\n                                        width: 200,\n                                        height: 100\n                                    }, void 0, false, {\n                                        fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().postTitle),\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"]),\n                                    onClick: ()=>handleDelete(post._id),\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, post._id, true, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"new\"]),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().formTitle),\n                            children: \"Add New Post\"\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Title\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Desc\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Image\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Content\",\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().textArea),\n                            cols: \"30\",\n                            rows: \"10\"\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bruno/Desktop/my-app/src/app/dashboard/page.tsx\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Dashboard, \"uMf7jkJO4wD4IHoeUqqvgKzxYuA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNaO0FBQ2Q7QUFDcUI7QUFDRDtBQUNiO0FBRS9CLE1BQU1NLFlBQVk7UUE4QmFDOztJQTdCM0IsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxvREFBb0Q7SUFHcEQsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0Isa0ZBQWtGO0lBQ2xGLGlDQUFpQztJQUNqQyxhQUFhO0lBRWIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixZQUFZO0lBRVoseUNBQXlDO0lBRXpDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFFOUIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0lBRVYsTUFBTUEsVUFBVUosMkRBQVVBO0lBQzFCLE1BQU1LLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxVQUFVO3lDQUFJQztZQUFBQTs7ZUFBU0MsU0FBU0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUNwRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsK0NBQU1BLENBQzdDLHVCQUFnRCxPQUF6Qkssb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU1EsSUFBSSxjQUFiUixvQ0FBQUEsY0FBZVksSUFBSSxDQUFDQyxJQUFJLEdBQy9DWDtJQUdKLElBQUlGLFFBQVFjLE1BQU0sS0FBSyxXQUFXO1FBQzlCLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ2Q7SUFFQSxJQUFJZixRQUFRYyxNQUFNLEtBQUssbUJBQW1CO1FBQ3RDYixtQkFBQUEsNkJBQUFBLE9BQVFlLElBQUksQ0FBQztJQUNqQjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsUUFBUUYsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUMvQixNQUFNQyxPQUFPTCxFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQzlCLE1BQU1FLE1BQU1OLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDN0IsTUFBTUcsVUFBVVAsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUVqQyxJQUFJO1lBQ0EsTUFBTWxCLE1BQU0sY0FBYztnQkFDdEJzQixRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCVDtvQkFDQUc7b0JBQ0FDO29CQUNBQztvQkFDQUssVUFBVTlCLFFBQVFRLElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJO2dCQUNwQztZQUNKO1lBQ0FKO1lBQ0FTLEVBQUVHLE1BQU0sQ0FBQ1UsS0FBSyxHQUFHLDhCQUE4Qjs7UUFDbkQsRUFBRSxPQUFPQyxLQUFLO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUVBLE1BQU1HLGVBQWUsT0FBT0M7UUFFeEIsSUFBSTtZQUNBLE1BQU1oQyxNQUFNLGNBQWlCLE9BQUhnQyxLQUFNO2dCQUM1QlYsUUFBUTtZQUNaO1lBQ0FqQjtRQUNKLEVBQUUsT0FBT3VCLEtBQUs7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBRUEsSUFBSWhDLFFBQVFjLE1BQU0sS0FBSyxpQkFBaUI7UUFDcENtQixRQUFRQyxHQUFHLENBQUNsQyxRQUFRYyxNQUFNO1FBQzFCLHFCQUNJLDhEQUFDdUI7WUFBSUMsV0FBVzVDLG1FQUFnQjs7OEJBQzVCLDhEQUFDMkM7b0JBQUlDLFdBQVc1QywrREFBWTs4QkFDdkJpQixZQUNLLFlBQ0FILGlCQUFBQSwyQkFBQUEsS0FBTWlDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0w7NEJBQUlDLFdBQVc1Qyw4REFBVzs7OENBQ3ZCLDhEQUFDMkM7b0NBQUlDLFdBQVc1QyxzRUFBbUI7OENBQy9CLDRFQUFDSSxtREFBS0E7d0NBQUM4QyxLQUFLRixLQUFLbEIsR0FBRzt3Q0FBRXFCLEtBQUk7d0NBQUdDLE9BQU87d0NBQUtDLFFBQVE7Ozs7Ozs7Ozs7OzhDQUVyRCw4REFBQ0M7b0NBQUdWLFdBQVc1QyxtRUFBZ0I7OENBQUdnRCxLQUFLdEIsS0FBSzs7Ozs7OzhDQUM1Qyw4REFBQzhCO29DQUFLWixXQUFXNUMsbUVBQWE7b0NBQUUwRCxTQUFTLElBQU1qQixhQUFhTyxLQUFLVyxHQUFHOzhDQUFHOzs7Ozs7OzJCQUx6Q1gsS0FBS1csR0FBRzs7Ozs7Ozs7Ozs4QkFTdEQsOERBQUNDO29CQUFLaEIsV0FBVzVDLGdFQUFVO29CQUFFOEQsVUFBVXZDOztzQ0FDbkMsOERBQUN3Qzs0QkFBR25CLFdBQVc1QyxtRUFBZ0I7c0NBQUU7Ozs7OztzQ0FDakMsOERBQUNpRTs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBUXZCLFdBQVc1QywrREFBWTs7Ozs7O3NDQUM5RCw4REFBQ2lFOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFPdkIsV0FBVzVDLCtEQUFZOzs7Ozs7c0NBQzdELDhEQUFDaUU7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQVF2QixXQUFXNUMsK0RBQVk7Ozs7OztzQ0FDOUQsOERBQUNvRTs0QkFDR0QsYUFBWTs0QkFDWnZCLFdBQVc1QyxrRUFBZTs0QkFDMUJzRSxNQUFLOzRCQUNMQyxNQUFLOzs7Ozs7c0NBRVQsOERBQUNDOzRCQUFPNUIsV0FBVzVDLGdFQUFhO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbEQ7QUFDSjtHQWpITUs7O1FBMEJjSCx1REFBVUE7UUFDWEMsc0RBQVNBO1FBRW1CRiwyQ0FBTUE7OztLQTdCL0NJO0FBbUhOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2MxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICAvLyBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xuICAgIC8vICAgICAgICAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgLy8gICAgICAgICB9KVxuXG4gICAgLy8gICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgIC8vICAgICAgICAgICAgIHNldEVycih0cnVlKVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIC8vICAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuXG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIGdldERhdGEoKVxuICAgIC8vIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXG4gICAgICAgIGAvYXBpL3Bvc3RzP3VzZXJuYW1lPSR7c2Vzc2lvbj8uZGF0YT8udXNlci5uYW1lfWAsXG4gICAgICAgIGZldGNoZXJcbiAgICApXG5cbiAgICBpZiAoc2Vzc2lvbi5zdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgICAgICByb3V0ZXI/LnB1c2goXCIvZGFzaGJvYXJkL2xvZ2luXCIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlLnRhcmdldFsxXS52YWx1ZTtcbiAgICAgICAgY29uc3QgaW1nID0gZS50YXJnZXRbMl0udmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldFszXS52YWx1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3RzXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHNlc3Npb24uZGF0YS51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtdXRhdGUoKVxuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKSAvLyByZXNldCBmb3JtIGFmdGVyIHRoZSBzdWJtaXRcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYC9hcGkvcG9zdHMvJHtpZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtdXRhdGUoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLnN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbi5zdGF0dXMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XG4gICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YT8ubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fSBrZXk9e3Bvc3QuX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdC5pbWd9IGFsdD1cIlwiIHdpZHRoPXsyMDB9IGhlaWdodD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RUaXRsZX0+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUocG9zdC5faWQpfT5YPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMubmV3fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1UaXRsZX0+QWRkIE5ldyBQb3N0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZVwiIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsInVzZVNXUiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkRhc2hib2FyZCIsInNlc3Npb24iLCJyb3V0ZXIiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibXV0YXRlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJ1c2VyIiwibmFtZSIsInN0YXR1cyIsInAiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRlc2MiLCJpbWciLCJjb250ZW50IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsInJlc2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaW1nQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInBvc3RUaXRsZSIsInNwYW4iLCJkZWxldGUiLCJvbkNsaWNrIiwiX2lkIiwiZm9ybSIsIm5ldyIsIm9uU3VibWl0IiwiaDEiLCJmb3JtVGl0bGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwidGV4dEFyZWEiLCJjb2xzIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});