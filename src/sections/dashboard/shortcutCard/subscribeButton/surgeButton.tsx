import React from "react";
import { useTranslation } from "react-i18next";

// material-ui
import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

// project imports
import { useGetUserSubscriptionQuery } from "@/store/services/api";
import MantisAvatar from "@/components/@extended/Avatar";

// asset imports
import surgeIcon from "@/assets/images/software/surge.png";

const SurgeButton: React.FC = () => {
  const { t } = useTranslation();
  const { data: subscribeInfo } = useGetUserSubscriptionQuery();

  const handleClick = () => {
    if (subscribeInfo) {
      const url = new URL(subscribeInfo.subscribe_url);
      url.searchParams.set("flag", "surge");
      window.open(
        `surge:///install-config?url=${encodeURIComponent(url.toString())}&name=${encodeURIComponent(
          window.settings.title
        )}`,
        "_self"
      );
    }
  };

  return (
    <ListItem disablePadding divider>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <MantisAvatar alt="Surge" type="combined" color="secondary" src={surgeIcon} />
        </ListItemAvatar>
        <ListItemText primary={t("dashboard.shortcut.subscribe.surge")} />
      </ListItemButton>
    </ListItem>
  );
};

export default SurgeButton;