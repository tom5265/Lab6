var library = (function () {
    return {
        TimeStamp: (function () {
            return {
                UnixTimestamp: function () { },
                UnixMillisecond: function () { }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {

                        },
                        WithOutSeconds: function () { }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () { },
                        Name: function () { }
                    }
                })(),
            }
        })(),
        Second: (function () {
            return {
                Second: function () {
                    var date = new Date();
                    var second = date.getSeconds();

                    return String(second);
                },
                DblDigit: function () {
                    var date = new Date();
                    var second = date.getSeconds();
                    var dblDigit = '0' + date.getSeconds();
                    if (second >= 10) {
                        return String(second);
                    }
                    else {
                        return String(dblDigit)
                    }
                }
            }
        })(),
        Minute: (function () {
            return {
                Minute: function () {
                    var date = new Date();
                    var minute = date.getMinutes();
                    return String(minute);
                },
                DblDigit: function () {
                    var date = new Date();
                    var minute = date.getMinutes();
                    var dblDigit = '0' + date.getMinutes();
                    if (minute >= 10) {
                        return String(minute);
                    }
                    else {
                        return String(dblDigit)
                    }
                }
            }
        })(),
        Hour: (function () {
            return {
                TwentyFourHour: function () { },
                TwelveHour: function () { },
                AMPM: (function () {
                    return {
                        UpperCase: function () { },
                        LowerCase: function () { }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () { },
                AbrDayOfWeek: function () { },
                FirstTwoOfWeek: function () { },
                WeekOfYear: function () { }
            }
        })(),
        Month: (function () {
            return {
                DateOfMonth: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var day = date.getDate();
                            return String(day);
                        },
                        Ordinal: function () {
                        },
                        DateDblDigit: function () {
                            var date = new Date();
                            var day = date.getDate();
                            var dblDigit = '0' + date.getDate();
                            if (day >= 10) {
                                return String(day);
                            }
                            else {
                                return String(dblDigit)
                            }
                        }
                    }
                })(),
                // MonthNumber: function(){ return String(new Date().getMonth() + 1);},
                MonthNumber: function () {
                    var date = new Date();
                    var month = date.getMonth() + 1;
                    return String(month);
                },
                MonthNumberDblDigit: function () {
                    var date = new Date();
                    var month = date.getMonth();
                    var dblDigit = '0' + (date.getMonth() + 1);
                    if (month >= 10) {
                        return String(month);
                    }
                    else {
                        return String(dblDigit)
                    }
                },
                AbrOfCurrentMonth: function () { },
                CurrentMonth: function () {

                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    return {
                        Numeral: function () { },
                        Ordinal: function () { }
                    }
                })(),
                YearFull: function () {
                    var date = new Date();
                    var fullYear = date.getFullYear();
                    return String(fullYear);
                },
                YearAbr: function () { }
            }
        })(),
        Defaults: function () { }
    }
})();