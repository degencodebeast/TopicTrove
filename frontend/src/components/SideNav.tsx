import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const SideNav = () => {
    return (
        <>
            <Box
                display={"flex"}
                position={"fixed"}
                background={"#000"}
                h={"100vw"}
                w={"260px"}
                maxW={"300px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={10}
                flexShrink={0}
                alignSelf={"stretch"}
            >
                <Box
                    display={"flex"}
                    padding={"10px 18px"}
                    alignItems={"flex-start"}
                    gap={10}
                    alignSelf={"stretch"}
                >
                    <Text
                        color={"white"}
                        fontFamily={"Irish Grover"}
                        fontSize={30}
                        fontStyle={"normal"}
                        fontWeight={400}
                        lineHeight={"normal"}
                    >
                        {" "}
                        TopicTrove
                    </Text>
                </Box>

                <Box
                    display={"flex"}
                    p={"24px 0px"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={12}
                    alignSelf={"stretch"}
                >
                    <Box
                        display={"flex"}
                        p={"0px 20px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"10px"}
                        alignSelf={"stretch"}
                    >
                        <Box
                            display={"flex"}
                            p={"10px 12px"}
                            color={"black"}
                            background={"white"}
                            borderRadius={"8px"}
                            alignItems={"center"}
                            gap={10}
                            alignSelf={"stretch"}
                        >
                            <Box w={"32px"} h={"32px"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M17.9997 12V5.33334H26.6663V12H17.9997ZM5.33301 16V5.33334H13.9997V16H5.33301ZM17.9997 26.6667V16H26.6663V26.6667H17.9997ZM5.33301 26.6667V20H13.9997V26.6667H5.33301ZM6.66634 14.6667H12.6663V6.66668H6.66634V14.6667ZM19.333 25.3333H25.333V17.3333H19.333V25.3333ZM19.333 10.6667H25.333V6.66668H19.333V10.6667ZM6.66634 25.3333H12.6663V21.3333H6.66634V25.3333Z"
                                        fill="black"
                                    />
                                </svg>
                            </Box>
                            <Text
                                fontWeight={500}
                                fontSize={18}
                                lineHeight={"normal"}
                            >
                                {" "}
                                Overview
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        p={"0px 20px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"10px"}
                        alignSelf={"stretch"}
                    >
                        <Box
                            display={"flex"}
                            p={"10px 12px"}
                            color={"#A2A4A5"}
                            borderRadius={"8px"}
                            alignItems={"center"}
                            gap={10}
                            alignSelf={"stretch"}
                        >
                            <Box w={"32px"} h={"32px"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M6.66634 10.4107V24.5133C6.66634 24.7525 6.74323 24.9489 6.89701 25.1027C7.05079 25.2565 7.24723 25.3333 7.48634 25.3333H24.513C24.7521 25.3333 24.9486 25.2565 25.1023 25.1027C25.2561 24.9489 25.333 24.7525 25.333 24.5133V10.4107H19.9997V19.4613L15.9997 17.4613L11.9997 19.4613V10.4107H6.66634ZM7.48634 26.6667C6.89079 26.6667 6.38279 26.4569 5.96234 26.0373C5.54279 25.6178 5.33301 25.1098 5.33301 24.5133V9.98268C5.33301 9.72223 5.37434 9.47779 5.45701 9.24934C5.54056 9.02001 5.66501 8.8089 5.83034 8.61601L7.90767 6.12001C8.10056 5.86045 8.3419 5.66445 8.63167 5.53201C8.92145 5.39957 9.23256 5.33334 9.56501 5.33334H22.3837C22.7161 5.33334 23.0317 5.39957 23.3303 5.53201C23.6281 5.66534 23.8734 5.86134 24.0663 6.12001L26.169 8.66668C26.3343 8.85957 26.4588 9.07512 26.5423 9.31334C26.625 9.55068 26.6663 9.79957 26.6663 10.06V24.5133C26.6663 25.1089 26.4566 25.6169 26.037 26.0373C25.6175 26.4569 25.1095 26.6667 24.513 26.6667H7.48634ZM7.17434 9.07734H24.7997L23.0263 6.94934C22.9401 6.86312 22.8415 6.79468 22.7303 6.74401C22.6192 6.69245 22.5037 6.66668 22.3837 6.66668H9.58901C9.4699 6.66668 9.35434 6.69245 9.24234 6.74401C9.13212 6.79468 9.03434 6.86312 8.94901 6.94934L7.17434 9.07734ZM13.333 10.4107V17.2827L15.9997 15.9493L18.6663 17.2827V10.4107H13.333Z"
                                        fill="#A2A4A5"
                                    />
                                </svg>
                            </Box>
                            <Text
                                fontWeight={500}
                                fontSize={18}
                                lineHeight={"normal"}
                            >
                                {" "}
                                Posts
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        p={"0px 20px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"10px"}
                        alignSelf={"stretch"}
                    >
                        <Box
                            display={"flex"}
                            p={"10px 12px"}
                            color={"#A2A4A5"}
                            borderRadius={"8px"}
                            alignItems={"center"}
                            gap={10}
                            alignSelf={"stretch"}
                        >
                            <Box w={"32px"} h={"32px"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M17.9997 12V5.33333H26.6663V12H17.9997ZM5.33301 16V5.33333H13.9997V16H5.33301ZM17.9997 26.6667V16H26.6663V26.6667H17.9997ZM5.33301 26.6667V20H13.9997V26.6667H5.33301ZM6.66634 14.6667H12.6663V6.66666H6.66634V14.6667ZM19.333 25.3333H25.333V17.3333H19.333V25.3333ZM19.333 10.6667H25.333V6.66666H19.333V10.6667ZM6.66634 25.3333H12.6663V21.3333H6.66634V25.3333Z"
                                        fill="#A2A4A5"
                                    />
                                </svg>
                            </Box>
                            <Text
                                fontWeight={500}
                                fontSize={18}
                                lineHeight={"normal"}
                            >
                                {" "}
                                Prompts
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        p={"0px 20px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"10px"}
                        alignSelf={"stretch"}
                    >
                        <Box
                            display={"flex"}
                            p={"10px 12px"}
                            color={"#A2A4A5"}
                            borderRadius={"8px"}
                            alignItems={"center"}
                            gap={10}
                            alignSelf={"stretch"}
                        >
                            <Box w={"32px"} h={"32px"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <path
                                        d="M13.5131 28L13.0304 24.144C12.6046 24.0151 12.1446 23.8133 11.6504 23.5387C11.1553 23.2631 10.734 22.968 10.3864 22.6533L6.83042 24.1667L4.34375 19.8333L7.41708 17.516C7.37797 17.2742 7.34553 17.0253 7.31975 16.7693C7.29486 16.5142 7.28242 16.2662 7.28242 16.0253C7.28242 15.8013 7.29486 15.5658 7.31975 15.3187C7.34464 15.0716 7.37708 14.7933 7.41708 14.484L4.34375 12.1667L6.83042 7.884L10.3611 9.37333C10.7593 9.04178 11.1904 8.74267 11.6544 8.476C12.1166 8.20933 12.5669 8.00311 13.0051 7.85733L13.5117 4H18.4864L18.9691 7.88267C19.4802 8.06133 19.9318 8.26711 20.3237 8.5C20.7166 8.73289 21.1206 9.02356 21.5357 9.372L25.1691 7.884L27.6558 12.1667L24.4797 14.5613C24.5526 14.8369 24.5935 15.0893 24.6024 15.3187C24.6113 15.5498 24.6157 15.7769 24.6157 16C24.6157 16.2071 24.6069 16.4253 24.5891 16.6547C24.5722 16.8849 24.5331 17.1631 24.4718 17.4893L27.5971 19.8333L25.1104 24.1667L21.5357 22.628C21.1206 22.9764 20.7029 23.2756 20.2824 23.5253C19.8611 23.7751 19.4233 23.9724 18.9691 24.1173L18.4864 28H13.5131ZM14.6664 26.6667H17.2744L17.7664 23.056C18.4384 22.8782 19.0429 22.6342 19.5797 22.324C20.1175 22.0138 20.6651 21.5889 21.2224 21.0493L24.5491 22.4667L25.8744 20.2L22.9557 18.008C23.0669 17.6284 23.1406 17.2791 23.1771 16.96C23.2126 16.6418 23.2304 16.3218 23.2304 16C23.2304 15.6622 23.2126 15.3422 23.1771 15.04C23.1415 14.7378 23.0677 14.4058 22.9557 14.044L25.9251 11.8L24.5998 9.53333L21.1971 10.96C20.7935 10.5164 20.2633 10.1013 19.6064 9.71467C18.9495 9.328 18.3273 9.07111 17.7397 8.944L17.3331 5.33333H14.6744L14.2584 8.91733C13.5864 9.06133 12.9686 9.29244 12.4051 9.61067C11.8424 9.93067 11.2824 10.3689 10.7251 10.9253L7.39975 9.53333L6.07442 11.8L8.96642 13.96C8.85531 14.2587 8.77753 14.5831 8.73308 14.9333C8.68864 15.2836 8.66642 15.648 8.66642 16.0267C8.66642 16.3644 8.68864 16.7 8.73308 17.0333C8.77753 17.3667 8.84686 17.6911 8.94108 18.0067L6.07442 20.2L7.39975 22.4667L10.6997 21.0667C11.2224 21.5947 11.7655 22.0182 12.3291 22.3373C12.8926 22.6564 13.5273 22.9049 14.2331 23.0827L14.6664 26.6667ZM15.9637 19.3333C16.8935 19.3333 17.6815 19.0102 18.3278 18.364C18.974 17.7178 19.2971 16.9298 19.2971 16C19.2971 15.0702 18.974 14.2822 18.3278 13.636C17.6815 12.9898 16.8935 12.6667 15.9637 12.6667C15.0286 12.6667 14.2393 12.9898 13.5957 13.636C12.9522 14.2822 12.6304 15.0702 12.6304 16C12.6304 16.9298 12.9522 17.7178 13.5957 18.364C14.2393 19.0102 15.0286 19.3333 15.9637 19.3333Z"
                                        fill="#A2A4A5"
                                    />
                                </svg>
                            </Box>
                            <Text
                                fontWeight={500}
                                fontSize={18}
                                lineHeight={"normal"}
                            >
                                {" "}
                                Settings
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default SideNav;
