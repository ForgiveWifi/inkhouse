import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import DoneIcon from '@mui/icons-material/Done';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function CopyIcon({text, copy}) {
  return (
    <div className='flexbox-row'> 
    <div>{text}</div>
    <CopyButton value={copy} timeout={3000}> 
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy ID'} withArrow position="right">
          <ActionIcon color={copied ? 'yellow' : 'red'} onClick={copy}>
            {copied ? <DoneIcon ssx={{ fontSize: "20px"}} /> : <ContentCopyIcon ssx={{ fontSize: "20px"}} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>  
    </div> 
  );
}

export default CopyIcon;