import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,Box,Portal
  } from '@chakra-ui/react'
  import React from 'react'
export default function InternalStateEx() {
    const initRef = React.useRef()
    return (
      <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button>Click to {isOpen ? 'close' : 'open'}</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>This is the header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                    Hello. Nice to meet you! This is the body of the popover
                  </Box>
                  <Button
                    mt={4}
                    colorScheme='blue'
                    onClick={onClose}
                    ref={initRef}
                  >
                    Close
                  </Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    )
  }