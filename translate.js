'use strict'

module.exports = {

    TagDict:{
        "Chinese": "中文",
        "Japanese":  "日本語",
    },

    MyReplace: ( tag ) => {

        console.log(tag);

        var newtag = this.TagDict[tag]
        if(newtag !== undefined)
            return newtag


        return tag;


        if(tag == "Chinese") return "中文"
        if(tag == "Japanese") return  "日本語"
    
        return tag
    },
  
  };
