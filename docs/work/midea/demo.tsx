interface Meeting {
    creatorId: string;
    starTime: number;
    endTime: number;
    permissions ?: {
        canCancel: boolean;
        canEdit: boolean;
        canInvite: boolean;
    }
}

interface Props {
    meeting: Meeting;
    userId: string;
}

const ReactComponent = ({ meeting, userId }: Props) => {
    return (
        <div>
            <h2>标题</h2>
            <div>内容</div>
            {
                new Date() > new Date(meeting.starTime) &&
                (userId === meeting.creatorId || (!!meeting.permissions && meeting.permissions.canCancel)) &&
                (<button> 取消 </button>)
            }
        </div>
    )
}

