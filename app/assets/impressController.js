process.on('uncaughtException', function (e) {
    console.error(e.message)
});
Array.prototype.remove = function (obj) {
    if (typeof obj == "number") {
        return this.splice(obj, 1);
    }
    else {
        var index = this.indexOf(obj);
        if (index > -1)
            return this.splice(index, 1);
    }
}
angular.module("SingularityClub1", [])
    .controller("impress", ["$scope", function ($scope) {
        $('[data-toggle="tooltip"]').tooltip()
        $scope.$watch("langs", function () {
            $('[data-toggle="popover"]').popover()
        });

        $scope.remove = function (obj) {
            if (obj != "js" && obj != "javascript")
                $scope.langs.remove(obj)
        };

        $scope.langs_dic = {
            "c": {text: "C", description: "能以简易的方式编译、处理低级存储器、产生少量的机器码以及不需要任何运行环境支持便能运行的编程语言。"},
            "c++": {text: "C++", description: "在C语言的基础上开发的一种集面向对象编程、泛型编程和过程化编程于一体的编程语言。"},
            "c#": {text: "C#", description: "C#是微软公司发布的一种面向对象的、运行于.NET Framework之上的高级程序设计语言。"},
            "java": {text: "Java", description: "是一种可以撰写跨平台应用软件的面向对象的程序设计语言。"},
            "oc": {text: "Objective-C", description: "是扩充C的面向对象编程语言。它主要使用于Mac OS X和GNUstep这两个使用OpenStep标准的系统。"},
            "php": {text: "PHP", description: "是一种通用开源脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，使用广泛，主要适用于Web开发领域。"},
            "python": {text: "Python", description: "是一种面向对象、解释型计算机程序设计语言，游戏，web，科学计算。"},
            "javascript": {
                text: "Javascript",
                description: "一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型，为浏览器的一部分，广泛用于客户端的脚本语言。"
            },
            "js": {
                text: "Javascript",
                description: "一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型，为浏览器的一部分，广泛用于客户端的脚本语言。"
            },
            "perl": {text: "Perl", description: "被称之为“一种拥有各种语言功能的梦幻脚本语言”、“Unix 中的王牌工具”。"},
            "vb": {
                text: "Visual Basic",
                description: "是一种由 Microsoft 公司开发的结构化的、模块化的、面向对象的、包含协助开发环境的事件驱动为机制的可视化程序设计语言。"
            },
            "vb.net": {text: "Visual Basic .Net", description: "是基于微软.NET Framework之上的面向对象的编程语言。输出为EXE程序是是以编译型语言方式运作。"},
            "r": {text: "R", description: ""},
            "tsql": {text: "Transact-SQL", description: "是 SQL 在 Microsoft SQL Server 上的增强版"},
            "ruby": {text: "Ruby", description: "一种为简单快捷的面向对象编程（面向对象程序设计）而创的脚本语言。强大且快捷。"},
            "pascal": {text: "Pascal", description: "第一个结构化编程语言。"},
            "f#": {text: "F#", description: "是由微软发展的为微软.NET语言提供运行环境的程序设计语言"},
            "sql": {text: "SQL", description: "结构化查询语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统"},
            "swift": {
                text: "Swift",
                description: "苹果于2014年WWDC（苹果开发者大会）发布的新开发语言，可与Objective-C*共同运行于Mac OS和iOS平台，用于搭建基于苹果平台的应用程序。"
            },
            "dart": {text: "Dart", description: "是一种“结构化的Web编程”语言"},
            "as": {
                text: "ActionScript",
                description: "是一种完全的面向对象的编程语言，功能强大，类库丰富，语法类似JavaScript，多用于Flash互动性、娱乐性、实用性开发，网页制作和RIA（因特网应用程序）开发"
            },
            "lisp": {text: "Lisp", description: "一种基于λ演算的函数式编程语言。"},
            "matlab": {text: "MatLab", description: "数学软件，用于算法开发、数据可视化、数据分析以及数值计算的高级技术计算语言和交互式环境"},
            "go": {text: "GO", description: "Go是一种新的语言，一种并发的、带垃圾回收的、快速编译的语言。"},
            "汇编": {text: "Assembly", description: "是面向机器的程序设计语言。"},
            "scala": {
                text: "Scala",
                description: "可伸缩的语言[1] 是一种多范式的编程语言，一种类似java的编程[2] ，设计初衷是要集成面向对象编程和函数式编程的各种特性。Scala是在JVM上运行。"
            },
            "lua": {text: "Lua", description: "Lua 是一个小巧的脚本语言。"},
            "erlang": {text: "Erlang", description: "是一种通用的面向并发的编程语言，目的是创造一种可以应对大规模并发活动的编程语言和运行环境。"},
            "tcl": {text: "TCL", description: "是一种 脚本语言，经常被用于 快速原型开发,脚本编程， GUI和测试等方面"},
            "groovy": {text: "Groovy", description: "是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性。"},
            "vf": {text: "Visual FoxPro", description: "是Microsoft公司推出的数据库开发软件，用它来开发数据库，既简单又方便。"},
            "shell": {text: "GNU/Shell", description: "提供使用者使用界面”的软件（命令解析器）。它类似于DOS下的command和后来的cmd.exe"},
            "clojue": {text: "Clojue", description: "是一种运行在Java平台上的 Lisp 方言"},
            "css": {text: "CSS", description: "它是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言"},
            "less": {text: "LESS", description: "LESS是一种由Alexis Sellier设计的动态层叠样式表语言"},
            "sass": {text: "SASS", description: "Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承等等特性。Sass 生成良好格式化的 CSS 代码，易于组织和维护。"},
            "html": {text: "HTML", description: "超文本标记语言，标准通用标记语言下的一个应用。"},
            "vbs": {text: "VBScript", description: "是基于Visual Basic的脚本语言。"}

        }
    }]);
