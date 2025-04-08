#import <Cordova/CDVPlugin.h>
#import "AppDelegate.h"
#import <WebKit/WebKit.h>

@implementation AppDelegate (CustomURL)
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
        if ([[url scheme] isEqualToString:@"fsdapp"]) {
            NSString *urlString = [url absoluteString];
            NSString *jsCode = [NSString stringWithFormat:@"window.handleCustomUrl && window.handleCustomUrl('%@');", urlString];

            if ([self.viewController.webView isKindOfClass:[WKWebView class]]) {
                dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
                    [(WKWebView *)self.viewController.webView evaluateJavaScript:jsCode completionHandler:nil];
                });
            }
        }
        return YES;
    }
@end
