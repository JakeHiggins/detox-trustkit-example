## About
This project is to demonstrate an error encountered starting Detox in iOS when TrustKit is added to the XCode Project.

## Steps to produce error
1. Fish: `pushd ios; and pod install; and popd; and yarn install`
1. Bash: `pushd ios && pod install && popd && yarn install`
1. `yarn start`
1. `yarn test`

## The Error
After running these steps, you should see the following error:

```$xslt
detox[31460] ERROR: [index.js/DETOX_INIT_ERROR]
 Signal 6 was raised
(
	0   Detox                               0x0000000108f44446 _ZL16__DTXHandleCrashP11NSExceptionP8NSNumberP8NSString + 497
	1   Detox                               0x0000000108f441cb _ZL17__DTXHandleSignali + 61
	2   libsystem_platform.dylib            0x000000010e4b3b3d _sigtramp + 29
	3   ???                                 0x000000000000ffff 0x0 + 65535
	4   libsystem_c.dylib                   0x000000010e235c45 abort + 127
	5   EarlGrey                            0x000000011cb64403 -[NSURLSession(GREYAdditions) greyswizzled_dataTaskWithRequest:completionHandler:] + 995
	6   example                             0x00000001087f9b1e -[RCTMultipartDataTask startTask] + 270
	7   example                             0x000000010883bf76 _ZL36attemptAsynchronousLoadOfBundleAtURLP5NSURLU13block_pointerFvP18RCTLoadingProgressEU13block_pointerFvP7NSErrorP9RCTSourceE + 902
	8   example                             0x000000010883b96f +[RCTJavaScriptLoader loadBundleAtURL:onProgress:onComplete:] + 639
	9   Detox                               0x0000000108f3d258 __dtx_loadBundleAtURL_onProgress_onComplete + 100
	10  example                             0x00000001087b78d8 -[RCTCxxBridge loadSource:onProgress:] + 1960
	11  example                             0x00000001087b60ee -[RCTCxxBridge start] + 7646
	12  example                             0x00000001088b5785 -[RCTBridge setUp] + 901
	13  example                             0x00000001088b4a7b -[RCTBridge initWithDelegate:bundleURL:moduleProvider:launchOptions:] + 379
	14  example                             0x00000001088b4893 -[RCTBridge initWithBundleURL:moduleProvider:launchOptions:] + 147
	15  example                             0x00000001087f21f9 -[RCTRootView initWithBundleURL:moduleName:initialProperties:launchOptions:] + 185
	16  example                             0x000000010878151b -[AppDelegate application:didFinishLaunchingWithOptions:] + 251
	17  Detox                               0x0000000108f3e7ed -[DetoxAppDelegateProxy application:didFinishLaunchingWithOptions:] + 183
	18  UIKitCore                           0x0000000115b4bbde -[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:] + 280
	19  UIKitCore                           0x0000000115b4d5cb -[UIApplication _callInitializationDelegatesForMainScene:transitionContext:] + 3979
	20  UIKitCore                           0x0000000115b52c2f -[UIApplication _runWithMainScene:transitionContext:completion:] + 1623
	21  UIKitCore                           0x00000001153714e9 __111-[__UICanvasLifecycleMonitor_Compatability _scheduleFirstCommitForScene:transition:firstActivation:completion:]_block_invoke + 866
	22  UIKitCore                           0x000000011537a29c +[_UICanvas _enqueuePostSettingUpdateTransactionBlock:] + 153
	23  UIKitCore                           0x0000000115371126 -[__UICanvasLifecycleMonitor_Compatability _scheduleFirstCommitForScene:transition:firstActivation:completion:] + 233
	24  UIKitCore                           0x0000000115371ae0 -[__UICanvasLifecycleMonitor_Compatability activateEventsOnly:withContext:completion:] + 1085
	25  UIKitCore                           0x000000011536fcb5 __82-[_UIApplicationCanvas _transitionLifecycleStateWithTransitionContext:completion:]_block_invoke + 795
	26  UIKitCore                           0x000000011536f95f -[_UIApplicationCanvas _transitionLifecycleStateWithTransitionContext:completion:] + 435
	27  UIKitCore                           0x0000000115374a90 __125-[_UICanvasLifecycleSettingsDiffAction performActionsForCanvas:withUpdatedScene:settingsDiff:fromSettings:transitionContext:]_block_invoke + 584
	28  UIKitCore                           0x000000011537580e _performActionsWithDelayForTransitionContext + 100
	29  UIKitCore                           0x00000001153747ef -[_UICanvasLifecycleSettingsDiffAction performActionsForCanvas:withUpdatedScene:settingsDiff:fromSettings:transitionContext:] + 221
	30  UIKitCore                           0x000000011537993a -[_UICanvas scene:didUpdateWithDiff:transitionContext:completion:] + 392
	31  UIKitCore                           0x0000000115b5144e -[UIApplication workspace:didCreateScene:withTransitionContext:completion:] + 515
	32  UIKitCore                           0x00000001156f5d09 -[UIApplicationSceneClientAgent scene:didInitializeWithEvent:completion:] + 357
	33  FrontBoardServices                  0x00000001100002da -[FBSSceneImpl _didCreateWithTransitionContext:completion:] + 448
	34  FrontBoardServices                  0x000000011000b443 __56-[FBSWorkspace client:handleCreateScene:withCompletion:]_block_invoke_2 + 271
	35  FrontBoardServices                  0x000000011000ab3a __40-[FBSWorkspace _performDelegateCallOut:]_block_invoke + 53
	36  libdispatch.dylib                   0x000000010e0d954b _dispatch_client_callout + 8
	37  libdispatch.dylib                   0x000000010e0dc60b _dispatch_block_invoke_direct + 312
	38  FrontBoardServices                  0x000000011003fba8 __FBSSERIALQUEUE_IS_CALLING_OUT_TO_A_BLOCK__ + 30
	39  FrontBoardServices                  0x000000011003f860 -[FBSSerialQueue _performNext] + 457
	40  FrontBoardServices                  0x000000011003fe40 -[FBSSerialQueue _performNextFromRunLoopSource] + 45
	41  CoreFoundation                      0x000000010b0e3721 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 17
	42  CoreFoundation                      0x000000010b0e2f93 __CFRunLoopDoSources0 + 243
	43  CoreFoundation                      0x000000010b0dd63f __CFRunLoopRun + 1263
	44  CoreFoundation                      0x000000010b0dce11 CFRunLoopRunSpecific + 625
	45  GraphicsServices                    0x000000011091a1dd GSEventRunModal + 62
	46  Detox                               0x0000000108f3b5b3 __detox_run + 284
	47  UIKitCore                           0x0000000115b5481d UIApplicationMain + 140
	48  example                             0x00000001087818f0 main + 112
	49  libdyld.dylib                       0x000000010e149575 start + 1
	50  ???                                 0x0000000000000006 0x0 + 6
)
```
