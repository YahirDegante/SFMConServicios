import { StyleSheet, Text, View } from 'react-native'
import React, { useState , Fragment} from 'react'
import { Icon, ListItem } from "react-native-elements";
import { map } from "lodash";
import Modal from "../common/Modal";
import ChangePeso from "../count/ChangePeso";
import ChangeObjetive from "../count/ChangeObjetive";

export default function ProgressOptions(props) {
    const { onReload } = props;
    const [showModal, setshowModal] = useState(false);
    const [conteined, setConteined] = useState(null);
    const onClose = () => setshowModal((prevState) => !prevState);
    const selectComponent = (key) => {
        //console.log("selectComponnet->", key)
        if (key == "displayPeso") {
            setConteined(<ChangePeso close={onClose} onReload={onReload} />);
        }
        if (key == "displayObjeitvo") {
            setConteined(<ChangeObjetive close={onClose} onReload={onReload} />);
        }
        onClose();
    };
    const optionsMenu = getOptionsMenu(selectComponent);
    return (
        <View>
            {map(optionsMenu, (option, index) => (
                <React.Fragment key={index}>
                    <View style={{ height: 10 }} />
                    <ListItem onPress={option.onPress}>
                        <ListItem.Content>
                            <ListItem.Title>{option.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type={option.typeIcon}
                            name={option.nameIconRight}
                            color={option.colorIocn}
                        />
                    </ListItem>
                    <View style={{ height: 10 }} />
                </React.Fragment>
            ))}
            <Modal visible={showModal} close={onClose}>
                {/* <Text>Holaaaa</Text> */}
                {conteined}
            </Modal>
        </View>
    );
}
function getOptionsMenu(selectComponent) {
    return [
        {
            title: "IMC:",
        },
        {
            title: "Peso:",
            typeIcon: "material-community",
            nameIconRight: "pencil-outline",
            colorIocn: "#ccc",
            onPress: () => selectComponent("displayPeso"),
        },
        {
            title: "Objetivo:",
            typeIcon: "material-community",
            nameIconRight: "pencil-outline",
            colorIocn: "#ccc",
            onPress: () => selectComponent("displayObjeitvo"),
        }
    ];
}
const styles = StyleSheet.create({})