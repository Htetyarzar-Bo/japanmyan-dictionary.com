var dictionary =  [
    { word:"これ"                       ,yomi:"これ"                                ,mean:["ဒီဟာ"]                    ,remark:""},
    { word:"それ"                       ,yomi:"それ"                                ,mean:["အဲ့ဒီဟာ"]                  ,remark:""},
    { word:"あれ"                       ,yomi:"あれ"                                ,mean:["ဟိုဟာ"]                   ,remark:""},
    { word:"この"                       ,yomi:"この"                                ,mean:["ဒီ"]                     ,remark:"ဒီ~"},
    { word:"その"                       ,yomi:"その"                                ,mean:["အဲ့ဒီ"]                    ,remark:"အဲ့ဒီ~"},
    { word:"あの"                       ,yomi:"あの"                                ,mean:["ဟို"]                     ,remark:"ဟို~"},
    { word:"辞書"                       ,yomi:"じしょ"                              ,mean:["အဘိဓာန်"]                 ,remark:""},
    { word:"コンピューター"             ,yomi:"computer"                            ,mean:["ကွန်ပျူတာ"]                 ,remark:""},
    { word:"傘"                         ,yomi:"かさ"                                 ,mean:["ထီး"]                    ,remark:""},
    { word:"テレホンカード"             ,yomi:"telephone card"                      ,mean:["တယ်လီဖုန်းကဒ်"]             ,remark:""},
    { word:"本"                         ,yomi:"ほん"                                 ,mean:["စာအုပ်"]                  ,remark:""},
    { word:"ノート"                     ,yomi:"note"                                 ,mean:["မှတ်စုစာအုပ်"]               ,remark:""},
    { word:"手帳"                       ,yomi:"てちょう"                            ,mean:["လက်ကိုင်စာအုပ်"]              ,remark:""},
    { word:"名刺"                       ,yomi:"めいし"                              ,mean:["လိပ်စာကဒ်"]                ,remark:""},
    { word:"雑誌"                       ,yomi:"ざっし"                              ,mean:["မဂ္ဂဇင်း","စာစောင်"]            ,remark:""},
    { word:"自動車"                     ,yomi:"じどうしゃ"                          ,mean:["မော်တော်ကား"]               ,remark:""},
    { word:"鞄"                         ,yomi:"かばん"                              ,mean:["အိတ်"]                    ,remark:"(ခရီးဆောင်အိတ် ကဲ့သို့ အိတ်)"},
    { word:"鍵"                         ,yomi:"かぎ"                                ,mean:["သော့"]                    ,remark:""},
    { word:"鉛筆"             　　      ,yomi:"えんぴつ"                        　　,mean:["ခဲတံ"]              ,remark:""},
    { word:"チョコレート"             　,yomi:"chocolate"                           ,mean:["ချောကလက်"]              ,remark:""},
    { word:"コーヒー"                   ,yomi:"coffee"                              ,mean:["ကော်ဖီ"]                             ,remark:""},
    { word:"新聞"             　　      ,yomi:"しんぶん"                            ,mean:["သတင်းစာ"]              ,remark:""},
    { word:"ボールペン"             　　 ,yomi:"ballpen"                            ,mean:["ဘောပင်"]              ,remark:""},
    { word:"日本語"             　　    ,yomi:"にほんご"                            ,mean:["ဂျပန်စာ"]              ,remark:""},
    { word:"机"             　　        ,yomi:"つくえ"                              ,mean:["စားပွဲ"]              ,remark:""},
    { word:"シャープペンシル"           ,yomi:"sharp pencil"                        ,mean:["ဘောပင်ခဲတံ"]              ,remark:"mechanical pencil"},
    { word:"時計"             　　      ,yomi:"とけい"                          　　,mean:["နာရီ"]              ,remark:""},
    { word:"カメラ"             　　    ,yomi:"camera"                              ,mean:["ကင်မရာ"]              ,remark:""},
    { word:"椅子"             　　      ,yomi:["いす"]                              ,mean:["ကုလားထိုင်","ခုံ"]              ,remark:""},
    { word:"テープ"             　　    ,yomi:"tape"                               ,mean:["တိပ်ခွေ"]              ,remark:""},
    { word:"英語"             　　      ,yomi:"えいご"                              ,mean:["အင်္ဂလိပ်စာ"]              ,remark:""},
    { word:"韓国"             　　      ,yomi:"かんこく"                            ,mean:["ကိုရီးယား"]              ,remark:""},
    { word:"韓国語"             　　    ,yomi:"かんこくご"                          ,mean:["ကိုရီးယားစာ"]              ,remark:""},
    { word:"今日は"                     ,yomi:"こんにちは"                          ,mean:["မင်္ဂလာနေ့လည်ခင်း"]           ,remark:""},
    { word:"これから"                   ,yomi:"これから"                        　　,mean:["အခုမှစပြီး"]                  , remark:""},
    { word:"これからお世話になります"   　,yomi:"これからおせわになります"             ,mean:["အခုချိန်မှစပြီကူညီစောင့်ရှောက်ပေးပါခင်ဗျာ"]                ,remark:"(တဖက်လူကိုမိမိကိုယ်ကိုမိတ်ဆက်ပြီးပြောရာမှာသုံးသည်)"},
    { word:"どうぞよろしくお願いします" 　,yomi:["どうぞよろしくおねがいします"]        ,mean:["တွေ့ရတာဝမ်းသာပါတယ်","ကူညီစောင့်ရှောက်ပေးပါခင်ဗျာ"]     ,remark:"(ပိုမိုယဥ်ကျေးအောင်ပြောဆိုရာမှာသုံးသည်)"},
    { word:"こちらこそ宜しく"          　,yomi:"こちらこそよろしく"                   ,mean:["ဒီကလည်းပဲတွေ့ရတာဝမ်းသာပါတယ်"]                     ,remark:"(မိမိဘက်မှတွေ့ရတာ ဝမ်းသာကြောင်းပြောတဲ့အခါမှာသုံးသည်)"},
    { word:"本の気持ちです"　　         　,yomi:"ほんのきもちです"                    ,mean:["စိတ်ရင်းဖြင့်ပါ"]    ,remark:"(လက်ဆောင်ပေးရာတွင် သုံးသည်)"},
    { word:"何ですか"                   ,yomi:"なんですか"                          ,mean:["ဘာလဲ","ဘာများလဲ"]          ,remark:""},
    { word:"どうぞ"             　　    ,yomi:"どうぞ"                              ,mean:["လက်ခံပေးပါ"]              ,remark:"(どうぞသည် တစ်ဖက်လူအား ဦးစားပေးလုပ်ဆောင်စေချင်သည့် အခါ၊ လက်ခံစေချင်သည်အခါမှာ သုံးသည်)"},
    { word:"どうも"             　　    ,yomi:"どうも"                              ,mean:["ကျေးဇူးတင်ပါတယ်"]                   ,remark:""},
    { word:"どうも有難う御座います"      ,yomi:"どうもありがとうございます"         　　,mean:["အရမ်းကျေးဇူးတင်ပါတယ်"]              ,remark:"(လေးလေးနက်နက်ပြောရာမှာသုံးသည်)"},
    { word:"違います"             　　  ,yomi:"ちがいます"                      　　,mean:["မဟုတ်ပါဘူး"]              ,remark:""},
    { word:"そうです"             　　  ,yomi:"そうです"              　　　　　　　,mean:["ဟုတ်ပါတယ်"]              ,remark:""},
    { word:"そうですか"             　　  ,yomi:"そうですか"              　　　　　,mean:["ဟုတ်လား"]              ,remark:""},
];