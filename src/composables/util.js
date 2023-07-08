import { ElNotification } from 'element-plus'

//Message Notification
export function notify(message, type="success", dangerouslyUseHTMLString = false){
    ElNotification({
        message, 
        type, 
        dangerouslyUseHTMLString,
        duration:3000
    })
}