<template>
  <el-card class="parent">
    <bread-crumb slot="header">
      <template slot="title">图文数据</template>
    </bread-crumb>
    <div ref="lineChart" class="lineChart"></div>
    <div ref="lineChart2" class="lineChart2"></div>
    <div ref="pieChart" class="pieChart"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    var lineChart = echarts.init(this.$refs.lineChart)
    lineChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })
    var lineChart2 = echarts.init(this.$refs.lineChart2)
    var data = []

    for (var i = 0; i <= 100; i++) {
      var theta = i / 100 * 360
      var r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
      data.push([r, theta])
    }
    lineChart2.setOption({
      title: {
        text: '极坐标双数值轴'
      },
      legend: {
        data: ['line']
      },
      polar: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
      },
      series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data
      }]
    })
    var pieChart = echarts.init(this.$refs.pieChart)
    pieChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直达', selected: true },
            { value: 679, name: '营销广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [
            { value: 335, name: '直达' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1048, name: '百度' },
            { value: 251, name: '谷歌' },
            { value: 147, name: '必应' },
            { value: 102, name: '其他' }
          ]
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
.parent {
  position: relative;
  .lineChart {
  width: 400px;
  height: 400px;
  margin-left: 50px;
}
.lineChart2 {
  position: absolute;
  right: 50px;
  top: 100px;
   width: 400px;
  height: 400px;
  margin-right: 50px;
}
.pieChart {
  width: 800px;
  height: 500px;
}
}

</style>
