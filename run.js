String.prototype.format = function () {
    var values = arguments;
    return this.replace(/\{(\d+)\}/g, function (match, index) {
        if (values.length > index) {
            return values[index];
        } else {
            return "";
        }
    });
};
var dataid = $("[data-id]");
for(var i=0;i<dataid.length;i++){
    var answerid = dataid.eq(i).attr("data-id");
    var question_type = dataid.eq(i).attr("data-type");
    var target = 0;
    if (question_type == "1"){
        for (var key in json){
            if(answerid == key){
                let question = $('[data-id]>h5 > div > span:nth-child(2)');
                question.eq(i).text("本题答案是"+json[key]["correctAnswer"]);
                $("#"+answerid+json[key]["correctAnswer"]).prev("div").click();
                target =1
            }
        }
        if(target ==0){
            console.log("第"+(i+1)+"题没有答案,请自行作答!")
        }
    }
    // 如果类型是多选题
    else if(question_type == "2"){
        // 将题目id放入json循环中
        for (let key in json){
            // 如果题目id和json的key相等
            if(answerid == key){
                let question = $('[data-id]>h5 > div > span:nth-child(2)');
                question.eq(i).text("本题答案是"+json[key]["correctAnswer"]);
                target = 1;
            }
        }
        if(target == 0){
            console.log("第"+(i+1)+"题没有答案,请自行作答!")
        }
    }
    else if(question_type == "4"){
        for (let key in json){
            if(answerid == key){
                let question = $('[data-id]>h5 > div > span:nth-child(2)');
                question.eq(i).text("本题答案是"+json[key]["correctAnswer"]);
                var Tru = $("input[name={0}]".format(key));
                var answer = json[key]["correctAnswer"];
                if(answer == "true"){
                    Tru.eq(0).click();
                }
                else {
                    Tru.eq(1).click();
                }
                target = 1;
            }
        }
        if(target == 0){
            console.log("第"+(i+1)+"题没有答案,请自行作答!")
        }
    }
    target = 0;
}
