'use strict';
const thaiDate = {
    options: {
        week: ["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],
        months: ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],
        monthsShort: ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],
        minYear: moment().year()-10,
        maxYear: moment().year()+8,
    },
    ranges: {
        today: ()=>{
            return [moment().startOf('day'), moment().endOf('day')];
        },
        yesterday: ()=>{
            return [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')];
        },
        lastday: (day)=>{
            return [moment().subtract(parseInt(day), 'days').startOf('day'), moment().endOf('day')];
        },
        nextday: (day)=>{
            return [moment().startOf('day'), moment().add(parseInt(day), 'days').endOf('day')];
        },
        thisMonth: ()=>{
            return [moment().startOf('months'), moment().endOf('months')];
        },
        lastMonth: ()=>{
            return [moment().startOf('months').subtract(1, 'months'),moment().endOf('months').subtract(1, 'months')];
        },
        lastYear: ()=>{
            return [moment().startOf('months').subtract(1, 'years'), moment().endOf('months')];
        },
        yearAgo: (year)=>{
            return [moment().month(9).startOf('months').subtract(parseInt(year),'years'), moment().month(8).endOf('months')];
        }
    }
}


//options
const date_range_dropdown = {	
	showDropdowns: true,
	autoApply: false,
	showWeekNumbers: false,
	autoUpdateInput: true,
	linkedCalendars: false,
	locale: {
		format: 'YYYY-MM-DD',
		calendarFormat: 'DD MMMM YYYY',
		separator: ',',
		calendarSeparator: ' - ',
		applyLabel: 'นำไปใช้',
		cancelLabel: 'ยกเลิก',
		customRangeLabel: 'กำหนดเอง',
		monthNames: thaiDate.options.months,
		firstDay: 1
	},
	ranges: {
		'วันนี้': thaiDate.ranges.today(),
		'เมื่อวาน': thaiDate.ranges.yesterday(),
		'7 วันที่แล้ว': thaiDate.ranges.lastday(7),
		'เดือนนี้': thaiDate.ranges.thisMonth(),
		'ปีปัจจุบัน': thaiDate.ranges.lastYear(),
	},
	alwaysShowCalendars: true,
    buddhistYear: true,     // ปี พ.ศ. custom เพิ่มเติม
	drops: 'down',
	minYear: thaiDate.options.minYear,
	maxYear: thaiDate.options.maxYear,
};