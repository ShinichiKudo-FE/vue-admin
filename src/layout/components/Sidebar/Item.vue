<script>
    export default {
        name: 'MentItem',
        functional: true, // 变为无状态、无实例的函数化组件
        props:{
            icon:{
                type:String,
                default: ''
            },
            title:{
                type:String,
                default: ''
            }
        },
        render(h,context){
            const {icon,title} = context.props;
            const vnodes = [];
            if(icon){
                vnodes.push(<svg-icon icon-class={icon}/>)
            }
            if (title) {
                vnodes.push(<span slot='title'>{(title)}</span>)
            }
            return vnodes
        }
    }
</script>
