1步骤概览
1高德官网申请使用权限(APIKEY和SHA1)  
（官方限制，一个app（包名一致）必须用一个APIKEY例如河长和巡查通包名不一样就必须两个APIKEY,sha1为打包验证不同电脑不一样，不设置验证不通过）
2.安装插件
3．Js使用
2步骤详情
1高德官网申请使用权限(APIKEY和SHA1)
http://lbs.amap.com/dev/key/app
新建APP
 
第一个随意
第二个获取自己本机sha1key:
在CMD依次执行 cd .android  和keytool -list -v -keystore debug.keystore
提示输入口令：不用管直接回车
 
 

第三个找到cordova打包程序的androidManifest,xml文件如图，填入包名
 


提交获得key(后面要用到)
 


2安装插件
cordova plugin add https://github.com/matrix-yang/cordovalocate.git

如图修改androidManifest,xml在其中application标签下加入一行
<meta-data	android:name="com.amap.api.v2.apikey" android:value="你申请到的key" />
 

3．JS使用
cordova.plugins.CordovaLocate.locate("sss",function (msg) {
            alert("success"+msg);
        },function (err) {
            alert("err"+err);
        });

依次得带经度，纬度，地址
