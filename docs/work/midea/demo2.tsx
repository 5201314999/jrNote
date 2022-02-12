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
    const meetingHasStarted = new Date() > new Date(meeting.startTime)
    const hasCreatedMeeting = userId === meeting.creatorId
    const canCancel = hasCreatedMeeting || (!!meeting.permissions && meeting.permissions.canCancel)
    return (
        <div>
            <h2>标题</h2>
            <div>内容</div>
            {
                meetingHasStarted && canCancel && (<button> 取消 </button>)
            }
        </div>
    )
}

