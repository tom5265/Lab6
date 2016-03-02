var library = (function () {
    return {
        TimeStamp: (function () {
            return {
                UnixTimestamp: function () {
                    var timeStamp = Math.floor(Date.now() / 1000);
                    return String(timeStamp);

                },
                UnixMillisecond: function () {
                    var timeStamp = Math.floor(Date.now());
                    return String(timeStamp);
                }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {
                            var date = new Date();
                            var amPm = 'AM';
                            var hours = date.getHours();
                            if (hours > 12) {
                                hours -= 12;
                                amPm = 'PM';
                            } else if (hours === 0) {
                                hours = 12;
                            }
                            var minutes = date.getMinutes();
                            if (minutes < 10) {
                                minutes = '0' + minutes;
                            }
                            var seconds = date.getSeconds();
                            if (seconds < 10) {
                                seconds = '0' + seconds;
                            }

                            var timeWithoutSecs = hours + ':' + minutes + ':' + seconds + ' ' + amPm;
                            return timeWithoutSecs;
                        },
                        WithOutSeconds: function () {
                            var date = new Date();
                            var amPm = 'AM';
                            var hours = date.getHours();
                            if (hours > 12) {
                                hours -= 12;
                                amPm = 'PM';
                            } else if (hours === 0) {
                                hours = 12;
                            }
                            var minutes = date.getMinutes();
                            if (minutes < 10) {
                                minutes = '0' + minutes;
                            }
                            var timeWithoutSecs = hours + ':' + minutes + ' ' + amPm;
                            return timeWithoutSecs;
                        }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var day = date.getDate();
                            var year = date.getFullYear();
                            var month = date.getMonth() + 1;
                            var mdyName = month + '/' + day + '/' + year;
                            return String(mdyName);
                        },
                        Name: function () {
                            var date = new Date();
                            var day = date.getDate();
                            var year = date.getFullYear();
                            var wordMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            var month = date.getMonth();
                            var currentMonth = String(wordMonth[month]);
                            var mdyName = currentMonth + ' ' + day + ', ' + year;
                            return String(mdyName);
                        }
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
                TwentyFourHour: function () {
                    var date = new Date();
                    var hour = date.getHours();
                    return String(hour);
                },
                TwelveHour: function () {
                    var date = new Date();
                    var hours = date.getHours();
                    if (hours > 12) {
                        hours -= 12;
                    } else if (hours === 0) {
                        hours = 12;
                    }
                    return String(hours);
                },
                AMPM: (function () {
                    return {
                        UpperCase: function () {
                            var date = new Date();
                            var hour = date.getHours();
                            var am = 'AM';
                            var pm = 'PM';
                            if (hour >= 12) {
                                return pm;
                            }
                            else {
                                return am;
                            }
                        },
                        LowerCase: function () {
                            var date = new Date();
                            var hour = date.getHours();
                            var am = 'am';
                            var pm = 'pm';
                            if (hour >= 12) {
                                return pm;
                            }
                            else {
                                return am;
                            }
                        }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () {
                    var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var date = new Date();
                    var dayOfWeek = date.getDay();
                    return String(weekDay[dayOfWeek]);
                },
                AbrDayOfWeek: function () {
                    var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
                    var date = new Date();
                    var dayOfWeek = date.getDay();
                    return String(weekDay[dayOfWeek]);
                },
                FirstTwoOfWeek: function () {
                    var weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                    var date = new Date();
                    var dayOfWeek = date.getDay();
                    return String(weekDay[dayOfWeek]);
                },
                WeekOfYear: function () {
                    var date = new Date;
                    var firstDay = new Date(date.getFullYear(), 0, 1);
                    return String(Math.round((((date - firstDay) / 86400000) + date.getDay() + 1) / 7));
                }
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
                            var date = new Date();
                            var day = date.getDate();
                            var x = day % 10;
                            if (x == 1) {
                                day = day + 'st';
                            }
                            else if (x == 2) {
                                day = day + 'nd';
                            }
                            else if (x == 3) {
                                day = day + 'rd';
                            }
                            else {
                                day = day + 'th';
                            }
                            return String(day);
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
                AbrOfCurrentMonth: function () {
                    var currentMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var date = new Date();
                    var month = date.getMonth();
                    return String(currentMonth[month]);
                },
                CurrentMonth: function () {
                    var currentMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var date = new Date();
                    var month = date.getMonth();
                    return String(currentMonth[month]);
                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var first = new Date(date.getFullYear(), 0, 1);
                            var theDay = Math.round(((date - first) / 1000 / 60 / 60 / 24) + .5, 0);
                            return String(theDay);

                        },
                        Ordinal: function () {
                            var date = new Date();
                            var first = new Date(date.getFullYear(), 0, 1);
                            var theDay = Math.round(((date - first) / 1000 / 60 / 60 / 24) + .5, 0);
                            var x = theDay % 10;
                            var y = theDay % 100;
                            if (x == 1 && y != 11) {
                                theDay = theDay + 'st';
                            }
                            else if (x == 2 && y != 12) {
                                theDay = theDay + 'nd';
                            }
                            else if (x == 3 && y != 13) {
                                theDay = theDay + 'rd';
                            }
                            else {
                                theDay = theDay + 'th';
                            }
                            return String(theDay);
                        }
                    }
                })(),
                YearFull: function () {
                    var date = new Date();
                    var fullYear = date.getFullYear();
                    return String(fullYear);
                },
                YearAbr: function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    year = year.toString().substr(2, 2);
                    return year;
                }
            }
        })(),
        Defaults: function () {
            var date = new Date();
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            var year = date.getFullYear();
            var hours = date.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }
            var minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            var newDate = year + '-' + month + '-' + day + 'T' + hours + ":" + minutes + ":" + seconds;
            return String(newDate);
        }
    }
})();
