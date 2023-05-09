import API_URLS from "../apiUrls";
import { GetChatEntity } from "../entities/chat/GetChatEntity";
import { GetChatResponse } from "../data/chat/GetChatResponse";
import { GetFullUserEntity } from "../entities/user/GetFullUserEntity";
import axios from "axios";
import { json } from "stream/consumers";
import localStorageKeys from "../localStorageKeys";
import { toGetChatEntity } from "../mapper/chat/ChatMapper";

export class ChatService {
  public getChatsForUser = async (): Promise<GetChatEntity[]> => {
    try {
      const user: GetFullUserEntity = JSON.parse(
        localStorage.getItem(localStorageKeys.user) ?? ""
      );
      const response = await axios.get<GetChatResponse[]>(
        API_URLS.GET_CHATS,
        {
            params: {
                userId: user.id
            }
        }
      );
      if (response.status !== 200) {
        return [];
      }
      return response.data.map((item) => toGetChatEntity(item));
    } catch (error) {
      return [];
    }
  };
}
