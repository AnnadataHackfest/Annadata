from zulip_bots.test_lib import BotTestCase, DefaultTests

from zulip_bots.bots.converter import utils

class TestConverterBot(BotTestCase, DefaultTests):
    bot_name = "converter"

    def test_bot(self) -> None:
        dialog = [
            ("", 'Too few arguments given. Enter `@annadata help` '
                 'for help on using the annadata.\n'),
        ]
        self.verify_dialog(dialog)
