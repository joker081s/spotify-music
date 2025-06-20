import BottomBar from "../components/BottomBar";
import Space from "../components/Space";
import TopBar from "../components/TopBar";
import { useState, useEffect } from "react";
import { songsData } from "../assets/assets";
import SongCard from "../components/SongCard";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  useEffect(
    function () {
      if (!query) {
        setData([]);
        return;
      }
      const res = songsData.filter(
        (val) =>
          val.name.toLowerCase().includes(query.toLowerCase()) ||
          val.desc.toLowerCase().includes(query.toLowerCase())
      );
      setData(res);
    },
    [query]
  );

  return (
    <div>
      <TopBar />
      <h2 className="px-4 font-bold text-2xl mt-4">
        Search Your Favourite Song
      </h2>
      <div className="px-4 mt-4">
        <div className="bg-white text-black rounded-lg px-3 py-2 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="bg-transparent outline-none w-full"
            value={query}
            onChange={handleQuery}
          />
        </div>
      </div>
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <SongCard item={item} index={index} />
          ))}
        </div>
      )}
      {data.length === 0 && (
        <div className="px-4 mt-6 space-y-4">
          <h2 className="font-bold text-lg">Start browsing</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-600 h-20 rounded-xl flex items-center justify-center text-white font-semibold">
              Music
            </div>
            <div className="bg-green-800 h-20 rounded-xl flex items-center justify-center text-white font-semibold">
              Podcasts
            </div>
            <div className="bg-purple-600 h-20 rounded-xl flex items-center justify-center text-white font-semibold">
              Live Events
            </div>
            <div className="bg-blue-800 h-20 rounded-xl flex items-center justify-center text-white font-semibold">
              Home of I-Pop
            </div>
          </div>

          <div className="px-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Discover something new
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-32 rounded-xl overflow-hidden relative">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUXGBcaGBgXGBcXFxgXGBgfGBcYGBcdHSggHRolHRoXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi8lICYvKy0tLS8tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLf/AABEIARkAtAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABAEAABAwEFBQUGBAUEAgMBAAABAAIRAwQFEiExBkFRYXETIoGRoQcyQrHB8CNSctEUM2KC4SSisvGSwnOz0hX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAmEQACAgICAgEFAAMAAAAAAAAAAQIRAyESMQRBEyJRYYGxMkJx/9oADAMBAAIRAxEAPwDZQkihKFwSDCUIoShABCUI0xCkAQlCOE0IAIShEQlCggjITEKSEoQkjIQwpITEIQRkISFKQhIQERagLVMQhLUBAWqNwXQ5qAtQHM5qie1dTgonNQHKWJlNgToDRgJ4ThKFJIMJ4RAJoQApQiShADCaEcJiEAEJQjhMUIAhNCMhNCACE0KQhNCAjIQkKUhDCAiIQkKUhMQgISEDgpiEJCAgLVE5i6XNUbgoBylqSncEyAvYShPCdSSDCUI4TQgBSRQlCEAwmRwhhADCSJCUA0Jk6ZAMkkkgGTEIoTQgAITEKQhMQgIiEBCmhAWoCIhRuapy1A5qAgLUlIWpIC3TpJwgGCUJ0kA0JinSQApJ0xQAlCU7iqm+r/s9kaHVqmGdGgFzz0aM/FAWRTErz29faY1pw06JHN7gD/4txZ9T5KiG39rfJY9jdYaR/wCzifmoIs9flKV47T29trRLqjZMGHM3cRlCurl9psuDbTTAafjpyY5uZrHQoLPSgUlBZrS2o0PYQ5p0I0KnUkiTQiSQAEISFIQhhARkIHBSkISEBCQkjwpkBZBOnSQCTIkyAZKE6ZACULiiKiqugE7gJ8kBjdv9sxY29lSztDhI3imDo48TwHLPn5A+9Xvq9rWcaricy8zl9OgUd6251etUrukl7i7pOg6AQPBQupiOe9Dllp2fbYi1rQec5RnA3D19Vwmxvae8x+WsD9lzNruaciRGma7ads0xVX5RkJ+5/dAdNOgx5w9o0OO5znTlqXZR4TK57TYXNk8DGkab1NjFUZgvPw4nRlz5fUroFQva4MfDW6tLnOkAZnkN8IC+2A2uNnIoVJNNzgGiR3S4gb908969hC+brZTcIBbB5b17L7Nb3daLIA+cVN2CT8TYBafUjwQlGvCSQRQhIBCYhHCYhTQAIUblKQo3KARlJOklAsE4TBOgHhJJJAMmTpigBKjqskEcclIVUbQ3s6ztaWsDi4kZkgCI3weKgHjNq2Rqis+i17Cxhw44ImMpjrzXdX2RLMDiS8fEBp14+CVS8a9PEajGOLs5DznJOcRxBVxs5te17Ax9IznOYG8jInLcVkm8136NUFhqvZgLXd7g98tIaHETBwjh6EKSy3O6oRh0wB2h0PPfqF6w202R+WQkZtLSSRzAkrvZaaDmhoDnQIGGjVyGkSWRCleRLpoPx49pnlFLZyuD3GuOuZyHXj9hEdnKtNokEazmRO/ThpqvXKQbPuPA4lrQPVwPoue2W2gXGnLyQJMMc4gcYbJjXM8F089HK8bl0eQU3ua9zScjpIk5f5k+C9A9k9Yk2hueQpzIjMl/0VXthdFNtMVmOHEEaODt60XsrsTm0KlZ2lRwDf0skT0kkeCuhNSVmeUHCVM3LUUJAJ1YBihKKExKAjco3KVyheUBGUyRKSAskSAFPKgBJJpToBJikkUAxVZtBZWVKLsbsIb3pidAZEb5n5KzXPbbMKtN1N0w4Rlr1Ch9aJXezye87pq1abeybOEnEDABDs5B4ggeZWdq3DaW1AwNPeBmPdAJORI119Vt70vp9krVLEKweS0d57C0txjSZzgRnzR3TXByduOSwPLkx/SzcsWPJ9SO24NnmUi17hLsIbOvVaMuDeiqTaQMiYXJVvCTGcCJPH7yVUXbLHSRonuYWEu0kAxwOUrGXJeFoZaDikQ5jSwgFsAAPLXROE+9nx0Vu+/BSpPMOcRg7rRJhzg0kDfEz4KwpPxUg00zln3wAesfuk9nUOjJ7S3cX0WUaYlznhrBwDnkty0yBzPLkvQ7tsYo0mUm6Ma1o8BCqrjsYfWdVcJwe7yLsp6xPmtDC3+MqxoweQ7yNghPCdIq8pBKEo0KAieoXqdyhegISnTFJCCxTpklBISeUARSgEUxSSKAYlMSmJTEoDC+0y7m/hWjACZ7NzjwPuDl8WY5LHWSo+g7vPlrtN5BG5av2t3nVp0qLGiKT3HtDGuGC1vIHM+C8vt96moANIWfJicn+C6GVRX5L227SvL4By0zzUtLaUuBHPTesa5+eq6rusdSs7DTaXH73rr4YJHPyzbNrsteuO1gEn3TlIcMxoT5eq9Op5hYfZfZZtGHuzqHUyYC21AwIWTI4uWujXjUlHZ13GyGv/Wf+IViVgNtbzrWWj2lFzmkuYMtB3syd2YyzWysF4B8NOTyJ5Hj4rVgyLikZ80HybOyEkSZaCgFCUSEoCJ6hepnKF6AiIKSdJAdwThCCnaoA6SaUkAiUiUxKF7wASTAAkk5AAanogCKrL8vujZWYqpzOjRGN3QEjLmsptJto4k07LIGhqRmf0g6DmVhK3aPeXPJcTqSSST1KolmS0i2ONvs0W1+1bLVSNF7G0qWRk96rIzGEDIeq84/hy4nAHFvEiPNWlrE1MB3Zu6bh4rqY+WRzT5GlY4JsoaNld2jWERi055kfMELe3DW7DuEAcMk107Ji20e2Di19IlvHLEXB0dSVfWvZ+oGiQCYGY0PMftqqfIk2k/Rbgira9l3YK0xorYs0WYuLFk0jTitlZ7K7Did3QBqfoN6oxpz0jRNqPZxWyyNfTOOMMd6d7dHCN8iR4obFTLWtPxACTvK5n3uyo8MpubgkgjEJkZSRvzy5KwxK6uOiq+Wy1pvkA8Uiszar2dZrRTDjNGr3c/gqDSP1DdxHNaJlQESDktcMilr2ZZwcQiUBKclASrDgFxUTkTigKEAFJOkhJ1pJikFAHlNKZNKAKV55t3tEXF1Cme4zJxHxP4fpb8+iutsr9NFoo03RUeCXHeynx5E6DxXmV4DIAGSTu65fNZs2TfBF+OH+zNRcd1CpSaSOfmUqtnY3tasSygD/c/h98VcurCzWUge81rWjm4gZ+bvRU20DewsdOmfeqvGLmYLnegWFLZrfRnKVixNc4+8TmeLtZ6bh0VW4ObLTxWsu2lLG8yT9+Sobe0Yz1Kuxztuymcao9B9m9cGzVA0S9pcSPzU3QT4tJnLitlRsrg1o4AeXBeZ+ze1mna6QnJ7qjSP7WEH0PkvXbZZwBLTHLUeC2Y1aszzON7W0ziwtnjDZ81nL9vV9oqCyU3EYhiqvaSCynwafzOOU7hJ3Ir6hzSXuLWs70jI93gfvcuHZWz9x1ciHVziA/LTGVJvSCXf3Fc5J8VonHHkzynam6atG0d6AXkmnhywsbpAGkZeXFa7ZTbsDDQtROWTauv/AJ/utHeF0UrTaAXicLYnlw85Kztt9n4L3OpvgTprqqFmjJVIueJxdxNff9nbabK7A4OyxNc0gw4ZtOSmuK3ONJrp7wADgePNQfwzaFKm2BDWhv75obG3s3YeIkH8zePUaHwO9USm07RcoqqZpqNYOEjxCIqqo1IMhWLHyJC34c3Nb7MeXFwf4E5A5E5NCvKQMKSIpIDpKFGVG5QSNKrr8vZlmpGq/Pc1u9ztwH3oF3krx72g32atrwg/h05a3gSMnO8Tl0AXE3S0dRVvZEbc6q6vXqZuLTP7DkBkFX2J0vYT+Zp8iuywMxNez8zCqixVMv6gYPVYUrs1vVI29K3mrXwTLQ6Y5jIKLbmtNajT/JTc/wAXHCPQOVdcT/x2kcFNti0/xxHChT8Mzl5yuIx239kduWqO+7R3cvhb9I+qzF5+8ec/NaC6Kn4bjwH38lnL2d3gpxLZzkei82FH+uoD+onyYf2Xt9vd3YXifs+ZNtpHgHu8wY9HBes3/bhSoueToMup0XoY9RMc+zCbR1+2qNsrT/MeA7kwZvz6ArRPOEQ3IwIHALI7IMNavVtDtwwt6uMn0H+9abtZMkfEY8O79PVY80rlRpwxqN/cmoUw1rjqc5PEorPMngk6Ijif8owYBWeS2aF0cF/Vfw2t4uATW8EUGuHvNgjnuI8RI8juUdqZ2oy3ZjqFJfZiyk8h+yX7IoO77TiZIzBGXTpuXbd1qOIsO6M/vgqa7Koa0uPuhs9HCZHjr1xKe6qmGHP955J893kkZOEk0TJKUaZpSmKGi6R0RL14yUlaPNkqdMaEkklJB1FA4I5QuUApdpreaFmqVB70YW/qccIPhM+C8b2hsZ7JtUbtV6B7TLcIp0MQEHtHyeGTB/yPkseb3olnYuDjuxYThErHllLmnFXRpxxXBp+ysu+2EsJaYdgI8YVbSrS/EMj8QR0waNQs+EnI/JctWC4g5EHLorIxVuumcSk6Vm42PotqVgCSCIc33YIBkzPhl14Lr24ZFtJg96z0888yHuB+Y81TbHWoCpSdiLXaAzGf9XKdcwrf2g25zbZTyBD6TmgxEkPkmNDoPNV8dNHfLaZx2GtFJw6qit9TE7zC6m1SGHmf2UFnbiq0x/U0+RkrnGqZM2bLYCh/r3AaNY4DoC0D0CtfaPepcewYfd16n9h81X+zJ3+oqvPw09fH/Co32o2mo905vqkD+50N9IWpOomd9mx2VswpWVrozILzzBzb44Q0LrwgwOEeJ4qWvDWBoyHdA6Nz+TSobO+STzXn3bbN9UkjpJzaOX/XyKivR57rG6uMdBvKZ74cT4ffjKIVAXSqpPZ2lo5RauzqtpbiP+l2XhSDqLmH75rO3rVm0yNy0NCpib0+wiYKO7W/hPYR8TR6Yj8yjt9rDX02cT5EaKSsRSBPEl27oPks/dFc2m2Yvgp5+OiNWOj0ShWgjnku0qonMfeitgZC3+JO04mTyY00xSkkUlrMx0ShcmDkxKgHmXtFs3+rDhUDQ6m0uwhpfPugCRImB6qnu24qbw4YTJ95zjOEf1O3u5D/ACltU9/8bWx6iofKO7/twqutN71MAY3IbgPU8zzWDIpOX06NcHFLZ1WvZTE4Np1QWDVzvh6HJc14bKPLpFVnWHSeojLzVndFYsYTJMEAc3HOegAJ6kLpFpzbhPeecLfDN7/Aac3N4KtZsidJlnxwasPZi7DZWkPLHuJyAaC7DqQ6dBMaq1v64/43s3Gs2k5hJEjFMxOUiBkqttQsOUZ/Xn9VoNlnziDszunUcv8AIT5ZXZ0sUTNnY6sThFVpE6hh+rlcWHZJodTMiWipiJ1c57cIiMg1o9Ve3jWrtcBToPfO8FgaOpJnyUTKVZrX1K2AANccLCTGWRLspjpvUpybolwgk3RktlbV2L7YwnvCk5o5lpIyVfsFTx12jcwl/k2B/uc0ri2atLBUq49XMcG/qKv/AGb0f5r40AE9Tn/wC1ZHxgzFBcpo2Vqf3o4CehOQ9A5Dd9PIk9Vy1KuJx6x4D/Jcu8tin1y89Vhi9WbX2cWZMnqpKZzge9GQnXfA4/4QsfhJxZj1+uaYPY8scMQc0zDZLSYwkE6sObsjw8+ccOTJnPiQWCyF3aPcNzg2dQACCepOIeG6c5rI4iOeRVrXloIIyM7zBBAzmSR8PqqW87YylTdVAOFjXOjjGg+QVmWFUkcY53bZj9t77/ENFhzBw+WvrKvNhrD2dLE7V5nnG5YS5bE+0Vu0fvcSfHMr1mxUcI5AJmqK4L9jFcnyf6Oku7wCtrO/uqlp+9KsrK/UKfElU/8ApHkRuB0kpIZSXqGA6JTFMCnUA8u9pdAi1NfAh1JsHiQ4gzzAj0WSJGvDcvatoblZa6RY7JwzY7e137HeF49eNgfRc5jxDmkgjh04g6ys2SNMug7QqdoIDWjPU+LjEeQCenbZthDT3abDTb4Hvnxdi8IQXe09+oCPwqb6nOQO5/uLT4LN2e0Fjg4CYUQxXZ1LJVG3q1ocCTH3qrzZi9XBzmnMfCQCeuawtlvFrzEEHge8PNWtz3x2TzD2NB1nvAf2qiWJovhlVnpRfaH+4wf3Pwj6n0VPtZXrUbOXPeyXSzCyTkWOOZMZ5Dco7JhqQf8A+i0E7mtaPQuWJ2mvcPrvYx7n0qYAknJ9QOAc/LdBIC6xQtk5Z1Fg7J2ZtSuWuExTe4fqbEfMrZ+zmlNJ7NDm4nfwaI64lm/Z5RabTicJABHLPcePRXN3W/8Ag7aaDoaHsMGIABq1C3L9OFWZpJ3EpwQaqT92aCyUXFjXDU5kbxi7xHqre0UsTWgc/T/tcXZOpgvxAsglx3t3k8wpG13EtgS2MiMxnn+yxy0jSls5L0a4MMKosWNxp1JDmOJD2kQ4RIIIBOJv0nqtDTcHvLZOMEHARIcw6wd2WITuIVfceFodSLX4h3hl+Z5keBDm+GW6e8WP2yvJP0jvolgp5lzmiYEOJIByz3mDi1JKyPtDtwZZw1k/iuaIOoDe871DfNbc1Q1sNh0khwgmOAj70PVeQbd3o2taAxhltIFsxEvnvH0A8FojDlNfgpcuMWWOw1tbjDagA3g/ut9WvGm0azHBeT2C1tYQ54IaRlq2ehOqv6F9UYgTu1M+qz58b5WkX4prjTZvrPWDhI0XdQfBCx91X5REYqjWicpcPJaKjbGES1wI4gyqYtxaZY6kqLolJRsfIBSXtJnlnaCnUbSiBQBqi2m2dZa2yO7UGjuI/K7lz3K8BTqGk9MlOjyhuytpa59J9ne5j2lrjSc0ZSCHAkxkQMiqe9NgalEiarWB0loqAh0DX3cQMSF7gF5vtreLH2lwce4wBkATiiHVI4HvYZ4hVNcFaZ2ny7RkrHdVGk18VO3qxAa1jm0xIyl516DiFSVLpcMnOGLhOucHnK1VhcQ7uUy1jpwuORzGbi3SIgAaZ71TWw/i5zM8REDToojJoNWFWgNiBkFX1WggDSSBPDNdVd8hc1OnjexgiS4a5DfqVEdEvZoK1jdY3MrU3l1F4EPHwv8AyPj0K1Fru+lelFjsWCszRwgxxa4b2zn4dVl7vt7qGOzWlhNJ4IIIkcnNUVx3g6yV95YdJkg8PFUNO+S7/pqi1/i+v4b3Z6wWykzs67mVAIwkYpGsgk+8NPPVFs617KApvydTLmHh3XQPDDCursvFtVodouFxHa1wN7x/9TFRkdxsuSp0PbLK15xHJwBhzcnCdYPUaGRkoLrsjmS3EHtcc8epkmY/LlhPUdF1td9UQGR5hcwyuJzLGpHBtFWfZ6P4Y7Wq4uDG4Q50CS13EYZ9V53d9ls1d7aZb2NXR3aDHidqSQ4gtPJeiU2gHG4SYwzvwgkgTwkqr2huJlpGOmcNobmx2hPBruI57las0XroreJrfZzWW8nUHCz1mtNOcLXNHckfCR8Lt8HjvVjtDdNn7F9Q0aZgAkhoDsAPfIcMwQ2SDyVHU7V9I2hrYrU4bXovHdqYdDH540I18lpbjvCnabOC0d0twluu6CFW7jtfssVPRgr42es7Qx7atXs3EBlTu1GNJ3PAgjr/ANI23HbrMRgHaM/NTMjxBghR266bRYag7MmpRqOLQ0jEDPwubv35jgt/cr6lQgVGYIaDAPkOi0OUnSTTT+5RUdtqmi0uyexpyCDgbIOsxnKS6SktyVKjG3bOtpRgqIFGFIJAUQQBEEBHbLS2lTfUeYaxpcegEryuzWAubjqFxL4e4FuhxFxIJOc4jOX7ra7d2j8FlERNWoAZgd1vedr4KktLgymYz0IhoM5zA3wCd3Hzpyb0WQ0ZG+LTNR72HC2nAAHGdN4y4TGWSqKlTFUc6IEmBvA3eKuiykS8gky+cLpDu6ATO6S4kZzo5U7mHG/SZ3RGee5colkVZ2S46rowzpi9F02hcVq0CsgjhsvKtqqFgY8EtHuOInwlTXZbS1uB4lk6xOHx3KsoXhVbTwEyyMgRu5FQUbeWnLyIBCqeK00XLKk7N028eyaXCqYAmDExuyOvVdey1vfUs9Sq7V76hPkAPQBec2u8nVBhMQM4DYW/2RbFjYDvxO83H6LPnxcMe+7LsWTnM0xrZjofoiNYhVna5ZHyUbrcG6lY6NNlkasrmfWA6hcdO96Tjk4TvzCK0V2u0MpxfsjkvQ15XkG4cUZkHmQ3iq6xWB1nfXbTMMewVKJGkg95vhw4EJtpKRczDIAw7yu3ZJ9WpS7N2FxbkHNM5czuV8Yvjoqcly2dV13l29PC5pDhqCD7w0I8VpbHRLRJ1PpyXPdtz06BLmiXu1cZJ6CdAu4lbMPjqL5Pv+GXJmclxQkkBKS1FB1NKkaomlSNKgEgRNKBqIKQYbau0Y7axs5UwOgLhLp8CPJVVltbaz6rp+J2Fp93CAMIA0AJE7/ciM1VbXkstVoZMS/0eMR8CHQj2Zt3ZvDH+6WuMkmAB3oAmI1MxOZCzvssXQ9qtFMvNEhzQ+ADIMiO6J6k5nIz5VVmspIz4nw5BRXlaO1qucGgS45gnOeIOUjkB03m2s9HC0ZaLmTpHSRUW6iB5fVU1VpLg0an57ldXxV3fepK4rjo47RTG4EE/wBsu+gVkHUW2cyVui4tNma0lse60DyCy9oHeWttbpxHjKytekS4wCuPHfZ1mRz1RwXqVy08NCk0xkxmU8t686sNkc6o0FhcMQkcp08dFuKdstHZuPZClha8jEZBFMxHXXLVR5UXNJInBJQtssa1M4jBOfAbvEqsviz4WExiPAQTPOe76K32Ys1W0sa51UNk5hrR47ydRy1XbeezZDOzxYyfijvOGZyGg3aDd1WeOKS2XvJFnlQquDsmnFzj6aL0PY266lek57n9nDgIDQTpMyTqgs2zlNkZLYbP2bAx0bz9FfGcckuNFMoOCuwKdxUgO/NT9UD5ALuo0WsGFrQ0cGiB6KchAQtEYRj0imUnLtglRuKMoHLs4IyUkxKSA62KVqiYpAoJJAUQQomqQeVe1Jo7drmjdgceJbmJ594jwWTsNvLO67vN4H6LX+0D3Hf/AD//ALWCdqqmk+zqLZessDHjHTdv0PDr/hWFS0YQJMdcv8eSrLu+L9QXXeHuHos77ovXVlJe9SXn73Ls2Yp96q/8rIHVxgfI+arbb73gFdbNfy63Wl8yrZ6xFcN5C1pWXFhB35ffhKsqFwMmSNU9P3mdf/VyvG6t+96xJujVSs47HcrA7EGkkEZN+IZTOcRn5+JVtfFha4FjaYzBBPe1MajfEaxwXbcutT+36rtr/Vv0WiCbj2UypSKW4KLWDugN1gQYBM5HeDlqeXRX9rpBwD5ILRIIJGvp5rio/wA13j8lNbf5R6O+ZV3or9metdsxEEx4CJO/L9lfXQPw/H6BZQe+PFa26P5Z/UVn8Z3O2XZ9RpHQQgIUjkDlvMhE4qCoVM9ctdCCF780lA7VJCD/2Q=="
                  alt="#haryanvi pop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                  #haryanvi
                  <br />
                  pop
                </div>
              </div>
              <div className="h-32 rounded-xl overflow-hidden relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="#haryanvi pop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white font-semibold text-sm">
                  #punjabi
                  <br />
                  pop
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Space />
      <BottomBar />
    </div>
  );
}

export default Search;
