/*
 * @Author: 聂成勇 niechengyong@esconsoft.com
 * @Date: 2023-04-03 16:24:08
 * @LastEditTime: 2023-04-03 21:15:31
 * @Description: canvas方式绘制
 */
const nodeSize=10; //默认节点大小
const nodeColor='#b92828';//默认节点颜色
const linkwidth=2;//默认连线宽度
const linkColor='#000000';//默认连线颜色

//canvas绘制节点
function canvasDrawNode(ctx:CanvasRenderingContext2D,node:any,nodeColor:any){
    node.filter(item=>{
        //设置绘制画笔为抗锯齿模式
        ctx.beginPath();
        ctx.arc(item.x,item.y,nodeSize,0,Math.PI*2,true);
        //圆形节点是渐变色
        nodeColor.filter(color=>{
            if(item.name==color.name) 
            {
                //渐变色
                const gradient = ctx.createRadialGradient(item.x, item.y, 0, item.x, item.y, nodeSize);
                gradient.addColorStop(0, color.start);
                gradient.addColorStop(1, color.end);
                ctx.fillStyle = gradient;
            }
        })
        ctx.fill();
        //绘制文字
        ctx.font = "5px Arial";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.name, item.x, item.y);
    })
}
//canvas绘制连线
function canvasDrawLink(ctx:CanvasRenderingContext2D,link:any,node,linkColor:any){
    link.filter(d=>{
        //绘制连线，和连线终点加上箭头,连线终点要减去圆形节点的半径
        const sourceNode = node.find(function(node) { return node.id === d.source; });
        const targetNode = node.find(function(node) { return node.id === d.target; });

        ctx.beginPath();
        ctx.moveTo(sourceNode.x,sourceNode.y);
        ctx.lineTo(targetNode.x,targetNode.y);
        ctx.lineWidth=5;
        linkColor.filter(color=>{
            if(d.label==color.name) 
            {
                ctx.strokeStyle=color.color;
            }
        })
        ctx.stroke();
        //给连线终点-nodeSize-3绘制箭头, 10是箭头的长度，8是箭头的宽度,
        ctx.beginPath();
        ctx.moveTo(targetNode.x-nodeSize+3,targetNode.y);
        ctx.lineTo(targetNode.x-nodeSize-10,targetNode.y-8);
        ctx.lineTo(targetNode.x-nodeSize-10,targetNode.y+8);
        ctx.fillStyle=linkColor;
        ctx.fill();
        //绘制连线上文字，文字背景是一个长方形,长度是文字显示长度1.3倍，白色,并且显示在连线中间
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect((sourceNode.x+targetNode.x)/2-ctx.measureText(d.label).width*1.3/2,(sourceNode.y+targetNode.y)/2-10,ctx.measureText(d.label).width*1.3,20);
        ctx.font = "5px Arial";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(d.label, (sourceNode.x+targetNode.x)/2, (sourceNode.y+targetNode.y)/2);
    })
}

export {canvasDrawNode,canvasDrawLink}