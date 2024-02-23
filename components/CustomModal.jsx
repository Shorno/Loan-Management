import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function CustomModal({onConfirm}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button variant={"flat"} color={"danger"} className={"w-full"} onPress={onOpen}>Delete</Button>
            <Modal backdrop={"transparent"} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}
                   isKeyboardDismissDisabled={true}
                   placement={"auto"}
                   motionProps={{
                       variants: {
                           enter: {
                               y: 0,
                               opacity: 1,
                               transition: {
                                   duration: 0.3,
                                   ease: "easeOut",
                               },
                           },
                           exit: {
                               y: -20,
                               opacity: 0,
                               transition: {
                                   duration: 0.2,
                                   ease: "easeIn",
                               },
                           },
                       }
                   }}

            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirm</ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure to delete client?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onClick={onConfirm}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
