var cedteam = {};
(function () {
    cedteam.alert = {
        option: {
            timeout: 1000,
            message: "This is a message"
        },
        init: function (option) {
            this.option = option;
        },
        show: function (t) {
            alert(this.option.message);
            t && setTimeout(function () {
                alert(2);
            }, t);
        },
        hide: function (e) {

        }
    }
    cedteam.user = {
        show: function (a) {
            var json = JSON.parse(a);
            $(json).each(function (i, e) {
                $("#user").append("<p>"+e.name+"-"+e.age+"</p>");
            });
        }
    }
})();