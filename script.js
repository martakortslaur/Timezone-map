 setTimeout(function() {
        $('body').timezonePicker({
            hoverText: function(e, data) {
                return (data.timezone + " (" + data.zonename + ")");
            },
            defaultValue: { value: "IN", attribute: "country" }
        });
    }, 1000)