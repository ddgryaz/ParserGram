import { Entity } from "telegram/define";

export interface IMessage {
  id: any;
  peerId?: any;
  date?: any;
  out?: any;
  mentioned?: any;
  mediaUnread?: any;
  silent?: any;
  post?: any;
  fromId?: any;
  replyTo?: any;
  message?: any;
  fwdFrom?: any;
  viaBotId?: any;
  media?: any;
  replyMarkup?: any;
  entities?: any;
  views?: any;
  editDate?: any;
  postAuthor?: any;
  groupedId?: any;
  fromScheduled?: any;
  legacy?: any;
  editHide?: any;
  pinned?: any;
  restrictionReason?: any;
  forwards?: any;
  ttlPeriod?: number;
  replies?: any;
  action?: any;
  reactions?: any;
  noforwards?: any;
  _entities?: Map<string, Entity>;
}
