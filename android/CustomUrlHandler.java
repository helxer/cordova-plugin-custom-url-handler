package ua.helxer.plugins;

import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.net.Uri;
import org.apache.cordova.*;
import org.json.JSONObject;

public class CustomUrlHandler extends CordovaPlugin {
    private void executeJsWithDelay(final String js) {
        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            this.webView.getEngine().evaluateJavascript(js, null);
        }, 500);
    }

    @Override
    protected void pluginInitialize() {
        CordovaActivity activity = (CordovaActivity) this.cordova.getActivity();
        Intent intent = activity.getIntent();
        handleIntent(intent);
    }

    @Override
    public void onNewIntent(Intent intent) {
        handleIntent(intent);
    }

    public void handleIntent(Intent intent) {
        if (intent != null && Intent.ACTION_VIEW.equals(intent.getAction())) {
            Uri data = intent.getData();
            if (data != null) {
                String js = "window.handleCustomUrl && window.handleCustomUrl(" + JSONObject.quote(data.toString()) + ");";
                executeJsWithDelay(js);
            }
        }
    }
}
