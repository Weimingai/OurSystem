
/***********************2011第一个echart图标***************************/
// 基于准备好的dom，初始化echarts实例
				var myChart11= echarts.init(document.getElementById('zhexian11'));
				// 指定图表的配置项和数据
				
				option11 = {
					tooltip : {
						trigger: 'axis'
					},
					toolbox: {
						show : true,
						feature : {
							magicType : {show: true, type: ['line', 'bar']},
						}
					},
					calculable : true,
					xAxis : [
						{
							axisLabel: {  
								interval:0,  
								rotate:17  
							},
							grid: {
								left: '10%',
								bottom:'35%'
							},
							type : 'category',
							boundaryGap : false,
							data : ['会计1701','会计1702','会计1703','会计ACCA1701','财务1701','财务1702','财务1703','信管1701','信管1702','信管1703','人力1701','人力1702','营销1701','营销1702','工商1701','工商1702','工商gj1701']
						}
					],
					yAxis : [
						{
							type : 'value',
							axisLabel : {
								formatter: '{value} 人'
							}
						}
					],
					series : [
						{
							name:'班级人数',
							type:'line',
							data:[36,35,36,28,34,36,35,37,36,36,33,34,29,31,28,28,21],
							markLine : {
								data : [
									{type : 'average', name: '平均值'}
								]
							},
							itemStyle : {
								normal: {label : {show: true},
								color: "#5b9bd4",//折线点的颜色
								lineStyle: {
									color: "#5b9bd4"//折线的颜色
								}}}
						},
						{
							name:'团推优人数',
							type:'line',
							data:[18,18,17,15,16,18,16,14,17,12,10,8,17,18,12,11,10],
							markLine : {
								data : [
									{type : 'average', name : '平均值'}
								]
							},
							itemStyle : { 
								normal: {label : {show: true},
								color: "#ec7c30",//折线点的颜色
								lineStyle: {
									color: "#ec7c30"//折线的颜色
								}}}
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart11.setOption(option11);
				
				
				// 基于准备好的dom，初始化echarts实例
					var myChart12= echarts.init(document.getElementById('shuzhuzhuangtu11'));
					// 指定图表的配置项和数据
					
					option12 = {					
						tooltip : {
							trigger: 'axis'
						},
						legend: {
							data:['推优数']
						},
						toolbox: {
							show : true,
						},
						calculable : true,
						xAxis : [
							{
								type : 'category',
								data : ['信管1701','信管1702','信管1703'],
								axisLabel: {
									show: true,
									textStyle: {
										fontSize : '16',
								        fontFamily : '微软雅黑'
									}
								}
							}					
						],
						yAxis : [
							{
								type : 'value',
								axisLabel: {
									show: true,
									textStyle: {
										fontSize : '16',
								        fontFamily : '微软雅黑'
									}
								}
							}
						],
						series : [
							{
								name:'推优数',
								type:'bar',
								data:[14,17,12], 
								barWidth : 50,//柱图宽度
								itemStyle:{  
								    normal:{color:'#5b9bd4',   //柱状颜色
								        label : {
								            show : true,  //柱头数字
								            position : 'top',
								            textStyle : {
								                fontSize : '18',
								                fontFamily : '微软雅黑',
								            }
								        }
								    } 
								} 
							}
						]
					};
					// 使用刚指定的配置项和数据显示图表。
					myChart12.setOption(option12);
					
					
					// 基于准备好的dom，初始化echarts实例
					var myChart13= echarts.init(document.getElementById('hengzhuzhuangtu11'));
					// 指定图表的配置项和数据
					option13 = {
						tooltip : {
							trigger: 'axis',
							axisPointer : {            // 坐标轴指示器，坐标轴触发有效
								type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						legend: {
							data:['推优数', '剩余人数']
						},
						toolbox: {
							show : true,
							feature : {
								mark : {show: true},
							}
						},
						calculable : true,
						xAxis : [
							{
								type : 'value'
							}
						],
						yAxis : [
							{
								type : 'category',
								data : ['会计','财务','信管','人力','营销','工商'],
								axisLabel: {
									show: true,
									textStyle: {
										fontSize : '16',
								        fontFamily : '微软雅黑'
									}
								}
							}
						],
						series : [
							{
								name:'推优数',
								type:'bar',
								stack: '总量',
								itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
								data:[50,50,43,18,35,21],
								itemStyle:{  
								    normal:{color:'#5b9bd4',   //柱状颜色
								        label : {
								            show : true,  //柱头数字
								            textStyle : {
								                fontSize : '18',
								                fontFamily : '微软雅黑',
								            }
								        }
								    } 
								} 
							},
							{
								name:'剩余人数',
								type:'bar',
								stack: '总量',
								itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
								data:[55,55,66,49,25,56],
								itemStyle:{  
								    normal:{color:'#ec7c30',   //柱状颜色
								        label : {
								            show : true,  //柱头数字
								            textStyle : {
								                fontSize : '18',
								                fontFamily : '微软雅黑',
								            }
								        }
								    } 
								} 
							}
						]
					};
					// 使用刚指定的配置项和数据显示图表。
					myChart13.setOption(option13);
				
/*****************************2012*********************************/
// 基于准备好的dom，初始化echarts实例
					var myChart21= echarts.init(document.getElementById('duijizhuzhuangtu'));
					// 指定图表的配置项和数据
					
					option21 = {
						tooltip : {
							trigger: 'axis',
							axisPointer : {            // 坐标轴指示器，坐标轴触发有效
								type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						legend: {
							data:['2017.12','2018.03','2018.06','2018.09','2018.12','2019.03']
						},
						toolbox: {
							show : true,
							orient: 'vertical',
							x: 'right',
							y: 'center',
							feature : {
								magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
							}
						},
						calculable : true,
						xAxis : [
							{
								type : 'category',
								data : ['团推优','积极分子','发展对象','预备党员','正式党员']
							}
						],
						yAxis : [
							{
								type : 'value'
							}
						],
						series : [
							{
								name:'2017.12',
								type:'bar',
								data:[3,1,1,1,1],
								itemStyle:{  
								    normal:{color:'#a9561f',   //柱状颜色							
								    } 
								}
							},
							{
								name:'2018.03',
								type:'bar',
								data:[5,3,2,2,2],
								itemStyle:{  
								    normal:{color:'#c46627',   //柱状颜色							
								    } 
								}
							},
							{
								name:'2018.06',
								type:'bar',
								data:[3,2,2,2,2],
								itemStyle:{  
								    normal:{color:'#d9712c',   //柱状颜色							
								    } 
								}
							},
							{
								name:'2018.09',
								type:'bar',
								data:[3,2,2,2,2],
								itemStyle:{  
								    normal:{color:'#ec7c30',   //柱状颜色							
								    } 
								}
							},
							{
								name:'2018.12',
								type:'bar',
								data:[3,2,2,2,2],
								itemStyle:{  
								    normal:{color:'#ef9e79',   //柱状颜色							
								    } 
								}
							},
							{
								name:'2019.03',
								type:'bar',
								data:[3,2,2,2,2],
								itemStyle:{  
								    normal:{color:'#f4b8a3',   //柱状颜色							
								    } 
								}
							}
						]
					};
						
					// 使用刚指定的配置项和数据显示图表。
					myChart21.setOption(option21);