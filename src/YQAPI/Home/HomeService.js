

import { LOGIN_URL } from '../Home/HomeHelper'
import YQRequest from '../../YQRequestManager/YQRequest'

class YQHomeService  {
    static fetchLoginNetwork = () => {
        return (
            YQRequest.post(
                url=LOGIN_URL,
                params={
                    phone: '13776072264',
                    c: '111111'
                },
                options={
                    headers:{
                        // 'x-yt-dbp-pre': 'eyIkc2NyZWVuX2hlaWdodCI6NjY3LCIkb3NfdmVyc2lvbiI6IjEzLjMuMSIsIiRtYW51ZmFjdHVyZXIiOiJBcHBsZSIsIiRkZXZpY2VfaWQiOiI1ODAyMTJCOC1CNkNDLTQ4NTMtQTVGQS0zRjA0NTQ0RjhBM0QiLCIkY2FycmllciI6IuS4reWbveenu+WKqCIsIiRhcHBfaWQiOiJjb20ueWFudHUuWVRWSVAiLCIkd2lmaSI6dHJ1ZSwiJG1vZGVsIjoiaVBob25lOCwxIiwiJGlzX2ZpcnN0X2RheSI6ZmFsc2UsIiRvcyI6ImlPUyIsIiRhcHBfbmFtZSI6IueglOmAlOiAg+eglCIsIiRsaWJfdmVyc2lvbiI6IjIuMS4xNCIsIiRzY3JlZW5fd2lkdGgiOjM3NSwiJHRpbWV6b25lX29mZnNldCI6LTQ4MCwiJGFwcF92ZXJzaW9uIjoiMS40LjciLCIkbGliIjoiaU9TIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifQ==',
                        // 'ytversion': 'v1.4.7',
                        // 'platform': 'iOS',
                        // 'Content-Type': 'application/json',
                        // 'uuid': 'ACC1467B-F51A-42E3-92E3-F58DFDC9DAB9',
                        // 'x-yt-dbp-cus': 'eyJwYWdlX2FkZHJlc3MiOiJZVExvZ2luQ29udHJvbGxlciIsImlzX2xvZ2luIjpmYWxzZSwiYXBwbGljYXRpb25fbmFtZSI6IueglOmAlOiAg+eglCIsInBhZ2VfbmFtZSI6IueZu+W9lemhtemdoiIsImFub255bW91c19pZCI6IjU4MDIxMkI4LUI2Q0MtNDg1My1BNUZBLTNGMDQ1NDRGOEEzRCIsImFwcGxpY2F0aW9uX3ZlcnNpb24iOiIxLjQuNyIsInBsYXRmb3JtX3R5cGUiOiJpT1MifQ=='
                      }
                }
            )
        ) 
    }
}

export default YQHomeService

