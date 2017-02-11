'use strict';

var R6MapsLangTermsKorean = (function(R6MapsLangTerms, undefined) {
  var name = 'kr',
    terms = {
      general: {
        pageTitleSelectMap: 'R6Maps.com - 맵 선택',
        cameraViewCaption: '{floorName} 카메라 시점',
        shortcutTip: '단축키: {shortcut}',
        menu: '메뉴',
        about: '자세히',
        languageHeader: '언어',
        optionsHeader: '옵션',
        labelLosOpacity: '카메라 시야선 불투명도',
        labelPercent: '{int}%', // according to: (0.12).toLocaleString('en', { style: 'percent' });
        labelLosDefault: '(Default)',
        labelLos105: '(Huh?)',
        labelLos110: '(Ludicrous!)',
        labelRoomLabelStyle: '방 라벨 스타일',
        labelNumberFloorsToDisplay: '층수',
        lockPanning: '모든 층을 함께 이동',
        lockZooming: '확대/축소 고정',
        fullScreen: '전체화면',
        enableScreenshots: '화면 캡쳐 활성화',
        contributions: '기부금',
        supportSiteNote: '지원을 보여주는 한 가지 방법은 소액 기부를 통한 것입니다.'
      },
      roomLabelStyles: {
        Dark: '어둡게',
        Light: '밝게 (기본값)',
        DarkAndLarge: '크고 어둡게',
        LightAndLarge: '크고 밝게',
        DisplayNone: '끄다'
      },
      floorDisplayOptions: {
        one: '1 - 꽉 찬 화면',
        two: '2 - 분할 화면',
        four: '4 - 그리드'
      },
      selectMaps: {
        selectAMap: '맵 선택',
        homeLink: '맵 선택'
      },
      floorNames: {
        basement: { full: '지하', short: 'B' },
        firstFloor: { full: '1층', short: '1' },
        secondFloor: { full: '2층', short: '2' },
        thirdFloor: { full: '3층', short: '3' },
        fourthFloor: { full: '4층', short: '4' },
        roof: { full: '옥상', short: 'R' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: '폭탄',
        hostageShort: 'H',
        hostage: '인질',
        secureShort: 'S',
        secure: '점령 지점',
        showAll: '모두 보기'
      },
      legend: {
        breakableWalls: '파괴가능한 벽',
        breakableFloorTraps: '트랩 도어 (바닥)',
        ceilingHatches: '트랩 도어 (천장)',
        lineOfSightWalls: '시야확보 가능한 벽',
        lineOfSightFloors: '시야확보 가능한 바닥',
        droneTunnels: '드론 터널',
        objectives: '목표',
        insertionPoints: '시작지점',
        securityCameras: '감시카메라',
        skylights: '지붕창',
        onFloorAboveOrBelow: '같은 층에 없을 수 있음',
        cameraLineOfSight: '카메라 시야',
        ladders: '사다리'
      },
      mapNames: {
        bank: '은행',
        bartlett: '바틀렛 대학교',
        border: '국경',
        chalet: '별장',
        club: '클럽 하우스',
        consulate: '영사관',
        coastline: '해안선',
        favela: '빈민가',
        hereford: '헤리퍼드 기지',
        house: '저택',
        kanal: '운하',
        kafe: '도스토예프스키 카페',
        oregon: '오리건',
        plane: '대통령 전용기',
        skyscraper: '마천루',
        yacht: '요트'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: '주차장 앞',
          spawnBackAlley: '골목 진입로',
          printerRoom: '인쇄실',
          parkingLot: '주차장',
          boulevard: '대로',
          jewelryFront: '귀금속점 앞',
          plaza: '광장',
          mainEntrance: '정문',
          garageRamp: '차고 경사로',
          exteriorParking: '외부 주차장',
          garageRoof: '차고 지붕',
          alleyAccess: '골목 진입로',
          backAlleyRooftop: '뒷골목<br/>옥상',
          backAlley: '뒷골목',
          highRoof: '높은 지붕',
          lowRoof: '낮은 지붕',
          vault: '금고',
          goldVault: '금괴 금고',
          serverRoomStairs: '서버실 계단',
          serverRoom: '서버실',
          CCTVRoom: 'CCTV<br/>통제실',
          loadingDock: '하역장',
          secureHallway: '보안 복도',
          sewer: '하수구',
          lockers: '탈의실',
          vaultLobby: '금고 로비',
          vaultEntrance: '금고 입구',
          mainStairway: '중앙 계단',
          bankGarage: '은행 차고',
          elevators: '승강기',
          tellersOffice: '창구 직원<br/>사무실',
          archives: '기록 보관소',
          tellers: '창구',
          loanOffice: '대출 사무실',
          officeHallway: '사무실 복도',
          skylightStairwell: '채광 계단',
          lobby: '로비',
          openArea: '대기 장소',
          staffRoom: '직원실',
          electricalRoom: '전기실',
          adminOffice: '관리 사무실',
          ATMs: '현금인출기',
          executiveHallway: '임원 복도',
          frontDesk: '접수처',
          executiveLounge: '임원 라운지',
          CEOOffice: '대표이사실',
          janitorCloset: '관리인 옷장',
          hallway: '복도',
          terrace: '테라스',
          stockTradingRoom: '주식 거래실',
          conferenceRoom: '회의실'
        },
        bartlett: {
          archwayHall: '아치 홀',
          backAlley: '뒷골목',
          bathroom: '화장실',
          campusField: '대학<br/>잔디밭',
          classroom: '강의실',
          coatRoom: '휴대품<br/>보관소',
          compassHallway: '나침반 복도',
          courtyard: '정원',
          centralHallway: '중앙<br/>복도',
          diningRoom: '식당',
          eastBalcony: '',
          eastCorridor: '동쪽<br/>통로',
          eastStairs: '동쪽<br/>계단',
          festival: '캠퍼스 공터',
          frontEntrance: '정면 출입구',
          frontOffice: '접수<br/>사무실',
          frontPatio: '앞쪽 파티오',
          gardenPass: '정원길',
          kitchen: '주방',
          lobby: '로비',
          lounge: '라운지',
          lowerLibrary: '도서관<br/>하부',
          mainGate: '정문',
          mainOffice: '본관',
          modelHall: '모형 전시관',
          pantry: '식료품 저장실',
          parking: '주차장',
          pianoRoom: '피아노실',
          readingRoom: '독서실',
          roof: '지붕',
          rowingMuseum: '조정<br/>박물관',
          serviceRoom: '관리실',
          terrace: '테라스',
          trophyRoom: '트로피<br/>전시실',
          upperLibrary: '도서관<br/>상부',
          vistaHallway: '조망<br/>복도',
          westBalcony: '',
          westCorridor: '서쪽<br/>통로'
        },
        border: {
          armoryLockers: '무기고<br/>로커',
          tellers: '창구',
          ventilationRoom: '환기실',
          exitHallway: '출구 복도',
          supplyCorridor: '보급품<br/>통로',
          detention: '구류실',
          customsInspection: '세관 검사',
          customsDesk: '세관<br/>데스크',
          centralStairs: '중앙 계단',
          serverRoom: '전산실',
          supplyRoom: '비품실',
          workshop: '작업실',
          mainLobby: '메인 로비',
          bathroom: '화장실',
          waitingRoom: '대기실',
          eastStairs: '동쪽<br/>계단',
          passportCheck: '여권<br/>확인',
          archives: '기록 보관소',
          offices: '사무실',
          officesHallway: '사무실 복도',
          fountain: '분수',
          mainHallway: '메인 통로',
          armoryDesk: '무기고<br/>데스크',
          securityRoom: '경호원실',
          breakRoom: '휴게실',
          spawnEastVehicleEntrance: '동쪽 차량 입구',
          spawnValley: '계곡',
          spawnWestVehicleExit: '서쪽 차량 출구',
          westTower: '서쪽 타워',
          pedestrianExit: '보행자 출구',
          valley: '계곡',
          parkingLotEntrance: '주차장<br/>입구',
          parkingLot: '주차장',
          westRoad: '서쪽 도로',
          vehicleCustoms: '차량 세관',
          crashScene: '사고 현장',
          eastRoad: '동쪽 도로',
          pedestrianEntrance: '보행자<br/>출구',
          pedestrianCustoms: '보행자<br/>세관',
          watchTower: '감시탑',
          eastAlley: '동쪽 골목',
          parkingLotAlley: '주차장<br/>입구',
          northBalcony: '북쪽 발코니',
          eastBalcony: '동쪽<br/>발코니',
          westBalcony: '서쪽<br/>발코니',
          southBalcony: '남쪽 발코니',
          roof: '지붕'
        },
        chalet: {
          spawnFrontYard: '앞마당',
          spawnCampfire: '모닥불',
          spawnCliffside: '절벽',
          spawnLakeside: '호반',
          libraryStairs: '서재<br/>계단',
          snowmobileGarageCorridor: '설상차 차고 통로',
          snowmobileGarage: '설상차<br/>차고',
          greatRoomStairs: '거실<br/>계단',
          storageRoom: '저장소',
          wineCellar: '포도주<br/>저장실',
          wineStock: '포도주<br/>창고',
          basementHallway: '지하실<br/>복도',
          backyardStairs: '뒷마당<br/>계단',
          mainStairs: '중앙<br/>계단',
          mainGarage: '차고',
          garageEntrance: '차고 입구',
          westEntrance: '서쪽<br/>출입구',
          gamingRoomHallway: '휴게실<br/>복도',
          gamingRoom: '휴게실',
          bar: '바',
          greatRoom: '거실',
          diningRoom: '식당',
          mainEntrance: '정문',
          trophyRoom: '전리품 전시실',
          kitchenHallway: '주방<br/>복도',
          kitchen: '주방',
          libraryHallway: '서재 복도',
          libraryEntrance: '서재<br/>입구',
          library: '서재',
          bedroomTerrace: '침실<br/>테라스',
          fireplaceHallway: '벽난로<br/>복도',
          bedroomHallway: '침실<br/>복도',
          masterBathroom: '안방<br/>화장실',
          masterBedroom: '안방',
          office: '집무실',
          woodenTrail: '나무길',
          campfireWood: '모닥불 나무',
          backyard: '뒷마당',
          gazeebo: '정자',
          cliffsideStairs: '절벽 계단',
          cliffsideWoods: '절벽 나무',
          backyardPatio: '뒷마당 파티오',
          officeBalcony: '집무실<br/>발코니',
          helipadTrail: '헬기장<br/>자국',
          helipad: '헬기장',
          frontYardPatio: '앞마당<br/>파티오',
          frontYard: '앞마당',
          bathroomBalcony: '화장실<br/>발코니',
          libraryBalcony: '서재<br/>발코니',
          bedroomBalcony: '침실<br/>발코니',
          snowmobiles: '설상차'
        },
        club: {
          spawnMainEntrance: '정문',
          spawnShippingDocks: '하역장',
          spawnWarehouse: '물류 창고',
          spawnConstructionSite: '건설 현장',
          easternSubroof: '서쪽<br/>지붕 밑',
          constructionSite: '건설 현장',
          container: '컨테이너',
          graffitiArea: '그래비티 구역',
          recreationArea: '휴식처',
          junkyard: '쓰레기장',
          VIPParking: 'VIP 주차장',
          mainGate: '정문',
          parking: '주차장',
          kennels: '사육장',
          trash: '쓰레기',
          centralSubroof: '중앙<br/>지붕 밑',
          easternRoof: '동쪽 지붕',
          centralRoof: '중앙 지붕',
          westernRoof: '서쪽 지붕',
          balcony: '발코니',
          escapeTunnel: '탈출<br/>터널',
          arsenalRoom: '무기실',
          basementHallway: '지하실 복도',
          memorialRoom: '기념실',
          utilityRoom: '다용도실',
          oilPit: '오일 피트',
          centralStairs: '중앙<br/>계단',
          church: '예배실',
          frontPorch: '정문 현관',
          garage: '차고',
          lobby: '로비',
          stockRoom: '창고',
          garageStorage: '차고<br/>저장실',
          lounge: '1층 라운지',
          bar: '바',
          centralHallway: '중앙 복도',
          kitchen: '주방',
          kitchenEntrance: '주방<br />입구',
          westernHallway: '서쪽<br/>복도',
          stripClub: '공연장',
          junkyardEntrance: '쓰레기장<br/>입구',
          sideEntrance: '옆문',
          changingRoom: '탈의실',
          bedroom: '침실',
          bathroom: '화장실',
          bedroomHallway: '침실 복도',
          logisticOffice: '병참<br/>사무실',
          gym: '체육관',
          secretStash: '비밀<br/>금고',
          CCTVRoom: 'CCTV 통제실',
          cashRoom: '현금<br/>보관실',
          easternStairs: '동쪽<br/>계단'
        },
        consulate: {
          spawnRiotBarricade: '폭동 바리케이드',
          spawnPoliceLine: '경찰 저지선',
          spawnGasStation: '주유소',
          spawnSideEntrance: '옆분',
          exitStairs: '출구<br/>계단',
          garage: '차고',
          basementCorridor: '지하실 통로',
          securityRoom: '경비실',
          cafeteria: '구내식당',
          mainStairs: '중앙 계단',
          lockerHallway: '탈의실<br/>복도',
          serviceStairs: '직원 계단',
          electricRoom: '전기실',
          storageRoom: '저장실',
          archives: '기록 보관소',
          archivesCorridor: '기록 보관소<br/>통로',
          pressRoom: '기자실',
          westCorridor: '서쪽 통로',
          publicBathroom: '공중<br/>화장실',
          antechamber: '곁방',
          lobby: '로비',
          eastCorridor: '동쪽 통로',
          tellers: '창구',
          visaOffice: '비자 사무실',
          visaEntrance: '비자<br/>출입구',
          frontDoor: '앞문',
          balcony: '발코니',
          copyRoom: '복사실',
          cabinet: '보관장',
          administrationOffice: '관리<br/>사무실',
          breakRoom: '휴게실',
          frontOffice: '접수 사무실',
          meetingRoom: '회의실',
          hallway: '복도',
          consulFrontDesk: '영사관<br/>접수처',
          privateBathroom: '전용<br/>화장실',
          waitingRoom: '대기실',
          consulateOffice: '영사관<br/>집무실',
          garageWay: '차고 진입로',
          courtyard: '뜰',
          backCourtyard: '뒤뜰',
          sideEntrance: '옆문',
          dumpster: '쓰레기통',
          parking: '주차장',
          gardens: '정원',
          fountain: '분수',
          emergencyExit: '비상구',
          garageRoof: '차고<br/>지붕',
          memorialGarden: '기념 정원',
          policeLine: '경찰 저지선',
          riotBarracade: '폭동 바리케이드',
          eastFrontYard: '앞뜰 동쪽',
          westFrontYard: '앞뜰 서쪽',
          frontAlley: '정면 골목',
          buildingRoof: '건물 지붕'
        },
        coastline: {
          aquarium: '수족관',
          backAlley: '뒷골목',
          balcony: '발코니<br/>(보이지 않음)',
          bathroom: '화장실',
          billiardsRoom: '당구장',
          blueBar: '블루 바',
          cantina: '식당 창구',
          courtyard: '정원',
          djBooth: 'DJ 부스 (보이지 않음)',
          garageRoof: '차고 지붕',
          hallOfFame: '명예의 전당',
          hallway: '복도',
          hookahDeck: '물담배<br/>덱<br/>(보이지 않음)',
          hookahLounge: '물담배 라운지',
          kitchen: '주방',
          mainEntrance: '정문',
          mainLobby: '메인<br/>로비',
          northStairs: '북쪽<br/>계단',
          office: '사무실',
          penthouse: '펜트하우스',
          pool: '수영장 가',
          poolEntrance: '수영장 입구',
          poolSide: '수영장 가',
          rooftop: '옥상',
          ruins: '잔해',
          securityRoom: '경비실',
          serviceEntrance: '직원<br/>출입구',
          southHallway: '남쪽 복도',
          southPromenade: '남쪽 산책로',
          southStairs: '남쪽<br/>계단',
          sunriseBar: '선라이즈 바',
          sunRoom: '일광욕실',
          theater: '영화감상실',
          terrace: '테라스',
          toilets: '화장실',
          vipLounge: 'VIP 라운지',
          walkway: '보도'
        },
        favela: {
          packagingRoom: '포장실',
          footballApartment: '축구장<br/>아파트',
          armoryRoom: '무기고',
          auntsApartment: '아주머니의<br/>아파트',
          auntsBedroom: '아주머니의<br/>침실',
          growRoom: '재배실',
          bikersApartment: '폭주족의<br/>아파트',
          methLab: '마약 제조실',
          footballBedroom: '축구장<br/>침실',
          footballOffice: '축구장<br/>사무실',
          bikersBedroom: '폭주족의<br/>침실',
          backStairs: '뒤쪽<br/>계단',
          auntsHall: '아주머니의<br/>홀',
          kidsRoom: '아이들 방',
          mainStairs: '중앙<br/>계단',
          stairHall: '계<br/>단<br/>실',
          roof: '지붕',
          laundryRoom: '세탁실',
          vaultRoom: '금고',
          bikersGarage: '폭주족의<br/>차고',
          backAlley: '뒷골목',
          schoolAlley: '학교 골목',
          footballPitch: '축구 경기장',
          market: '시장',
          marketAlley: '',
          schoolRooftops: '',
          street: '도로',
          rooftops: '옥상',
          courtyard: '정원',
          accessAlley: '골목 진입로',
          shop: '매장<br/>(보이지 않음)',
          marketRooftops: '시장 옥상'
        },
        hereford: {
          spawnTrainingCourse: '훈련 코스',
          spawnParking: '주차장',
          spawnShootingRange: '사격장',
          armory: '무기고',
          lockers: '탈의실',
          corridor: '통로',
          mainStairs: '중앙<br/>계단',
          maintenanceArea: '정비 구역',
          briefingRoom: '브리핑실',
          basementEntrance: '지하실<br/>입구',
          garage: '차고',
          TVRoom: 'TV실',
          garageCorridor: '차고 통로',
          kitchen: '주방',
          corridor1: '통로<br/>1',
          diningRoom: '식당',
          pianoLounge: '피아노 라운지',
          office: '사무실',
          masterBedroom: '안방',
          backAccess: '후방<br/>접근로',
          laundryRoom: '세탁실',
          bathroom: '화장실',
          kidsBedroom: '아이방',
          ballisticMatDepot: '사격 매트<br/>창고',
          storage: '저장실',
          storageCorridor: '저장실<br/>통로',
          dummyDepot: '모형 창고',
          workshop: '작업실',
          shootingRangeEastEntrance: '사격장<br/>동쪽 접근로',
          shootingRangeWestEntrance: '사격장<br/>서쪽 접근로',
          tireSetting: '타이어 엄폐물',
          observationRamp: '관측대',
          barracks: '병영',
          busBackAlley: '버스<br/>뒷골목',
          rappelTower: '레펠<br/>훈련장',
          terrace: '테라스',
          frontAccess: '전방 접근로',
          chapelGate: '예배당 대문',
          forkliftArea: '지게차<br/>구역',
          sideStairsAlley: '측면 계단<br/>골목',
          sideStairs: '측면<br/>계단',
          garageTop: '차고 지붕',
          rooftop: '옥상',
          parkingEntrance: ''
        },
        house: {
          spawnConstructionSite: '건설 현장',
          spawnRiverDocks: '강 선착장',
          spawnAPCArea: '장갑차 구역',
          spawnSideStreet: '옆길',
          depot: '창고',
          trainingRoom: '체력 단련실',
          kitchenStairs: '주방<br/>계단',
          sideStairs: '측면<br/>계단',
          laundryRoom: '세탁실',
          garage: '차고',
          livingRoom: '거실',
          backEntrance: '뒷문',
          lobby: '로비',
          kitchen: '주방',
          office: '집무실',
          diningRoom: '식당',
          workshop: '작업실',
          kidsBedroom: '아이방',
          upperHallway: '위층<br/>복도',
          lobbyStairs: '로비<br/>계단',
          walkIn: '수납실',
          masterBedroom: '안방',
          bathroom: '화장실',
          sideStreet: '옆길',
          garageEntrance: '차고<br/>입구',
          garden: '정원',
          backAlley: '뒷골목',
          patio: '파티오',
          jacuzzi: '자쿠지',
          basementStairs: '지하실<br/>계단',
          treehouseAlley: '나무집<br/>길',
          frontYard: '앞마당',
          frontStreet: '앞길',
          frontPorch: '정문 현관',
          backPorch: '후문 현관',
          backPorchTop: '후문 현관 위',
          frontPorchTop: '정문 현관 위',
          rooftop: '옥상'
        },
        kanal: {
          spawnFloatingDock: '부양식 도크',
          spawnSailboats: '요트',
          spawnConstructionSite: '건설 현장',
          boatGarage: '보트 보관소',
          boatSupplies: '보트 비품실',
          pipes: '누수 파이프',
          boatSuppliesHallway: '보트<br/>비품실<br/>복도',
          lockerRoom: '탈의실',
          coastGuardStairs: '해얀<br/>경비대<br/>계단',
          showers: '샤워실',
          showersCorridor: '샤워실<br/>통로',
          loadingDock: '하역장',
          machineHallway: '기계실 복도',
          controlCenterStairs: '통제실 계단',
          holdingRoom: '구류실',
          holdingRoomHallway: '구류실<br/>복도',
          radio: '무전실',
          coastGuardOffice: '해안 경비대<br/>사무실',
          archives: '기록 보관소',
          coastGuardHall: '해얀<br/>경비대<br/>복도',
          mainEntrance: '정문',
          lounge: '라운지',
          bridge: '다리',
          modelRoom: '모형실',
          securityRoom: '경비실',
          projectorRoom: '영사실',
          mapsOffice: '지도 사무실',
          mapsOfficeHallway: '지도 사무실<br/>복도',
          kitchen: '주방',
          cafeteria: '구내식당',
          plantsHallway: '공장 복도',
          thirdFloorExit: '3층 출구',
          controlRoom: '통제실',
          electricRoom: '전기실',
          controlRoomHallway: '통제실 복도',
          serverRoom: '서버실',
          lockgate: '수문',
          quayContainers: '부두 컨테이너',
          lockgateTunnel: '수문<br/>터널',
          waterWalkway: '철골 다리',
          quayConstruction: '부두 건설 현장',
          constructionSite: '건설<br/>현장',
          constructionEntrance: '건설 현장<br/>입구',
          parkingAlley: '주차장 골목',
          parkingEntrance: '주차장<br/>입구',
          middleRoad: '중앙 도로',
          forkliftAlley: '지게차<br/>골목',
          frontLawn: '앞 잔디밭',
          basementStairs: '지하실 계단',
          bridgeRoof: '다리 지붕',
          coastGuardRoof: '해안<br/>경비대<br/>지붕',
          roofBrickPile: '지붕<br/>벽돌<br/>더미',
          balcony: '발코니',
          controlCenterRoof: '통제소<br/>지붕',
          dockStairs: '선착장 계단',
          parking: '주차장',
          boatCrane: '보트 기중기',
          mapArchives: ''
        },
        kafe: {
          spawnRiverDocks: '강 선착장',
          spawnChristmasMarket: '크리스마스 시장',
          spawnPark: '공원 골목',
          laundryRoom: '세탁실',
          frontStairs: '앞쪽<br/>계단',
          bakery: '제과점',
          bakeryKitchen: '제과<br/>주방',
          kitchenPrep: '주방<br/>보조실',
          kitchenGrill: '주방 그릴',
          kitchenPickUp: '주방<br/>서빙 창구',
          coldRoom: '냉장실',
          diningRoom: '식당',
          backStairs: '뒤쪽<br/>계단',
          coldRoomCorridor: '냉장실<br/>통로',
          VIPSection: 'VIP<br/>전용실',
          barStairs: '바<br/>계단',
          storage: '저장소',
          museumEntrance: '박물관<br/>입구',
          miningRoom: '광산 펌프방',
          trainMuseum: '기차 박물관',
          pillarDiningRoom: '기둥 식당',
          mainCorridor: '중앙 통로',
          readingRoomCorridor: '독서실 통로',
          readingRoom: '독서실',
          fireplaceHall: '벽난로<br/>홀',
          cigarShop: '시가 매장',
          cigarLounge: '시가 라운지',
          bar: '바',
          barBackstore: '바<br/>뒤쪽 저장실',
          washrooms: '화장실',
          washroomCorridor: '화장실 통로',
          cocktailLounge: '칵테일<br/>라운지',
          cocktailLoungeEntrance: '칵테일<br/>라운지<br/>입구',
          westMainStreet: '서쪽 대로',
          mainStreet: '대로',
          eastMainStreet: '',
          bakeryParking: '제과점<br/>주차장',
          bakeryRoof: '제과점 지붕',
          cafeRoofTop: '카페 옥상',
          terrace: '테라스',
          backAlley: '뒷골목',
          garrage: '차고',
          parkAlley: '공원<br/>골목'
        },
        oregon: {
          spawnJunkyard: '쓰레기장',
          spawnStreet: '도로',
          spawnConstructionSite: '건설 현장',
          towerStairs: '감시탑<br/>계단',
          boilerRoom: '보일러실',
          electricRoom: '전기실',
          bunkerEntrance: '벙커 입구',
          bunker: '벙커',
          basementCorridor: '지하실<br/>통로',
          supplyRoom: '비품실',
          laundryRoom: '세탁실',
          laundryStorage: '세탁물<br/>저장소',
          laundryStairs: '세탁실<br/>계단',
          office: '사무실',
          diningHall: '식당',
          diningHallCorridor: '식당 통로',
          showers: '샤워실',
          kitchen: '주방',
          bathroom: '화장실',
          dormStairs: '기숙사 계단',
          pantry: '식료품<br/>저장소',
          bathroomCorridor: '화장실 통로',
          classroom: '교실',
          lobby: '로비',
          mainStairs: '중앙 계단',
          meetingHall: '회관',
          rearStage: '무대 뒤',
          garage: '차고',
          officeStorage: '사무용품<br/>저장소',
          kidsDorm: '아이방',
          dormMainHall: '기숙사<br/>큰방',
          smallDorms: '기숙사 작은방',
          armoryCorridor: '무기고<br/>복도',
          masterBedroom: '안방',
          armory: '무기고',
          walkIn: '수납실',
          attic: '다락방',
          watchTower: '감시탑',
          busYard: '버스 공터',
          junkyard: '쓰레기장',
          farmlands: '종지',
          shootingRange: '사격장',
          constructionSite: '건설 현장',
          parking: '주차장',
          mainEntrance: '정문',
          street: '도로',
          balcony: '발코니',
          diningHallRoof: '식당 지붕',
          officeRoof: '사무실 지붕',
          meetingHallEntrance: '회관<br/>입구',
          garageRoof: '차고 지붕',
          dormsRoof: '기숙사<br/>지붕',
          meetingHallRoof: '회관 지붕',
          supplyCloset: ''
        },
        plane: {
          spawnOfficialEntrance: '주 출입구',
          spawnReporterEntrance: '기자 출입구',
          spawnServiceEntrance: '승무원 출입구',
          pressBathroom: '기자용 화장실',
          meetingRoom: '회의실',
          frontHallway: '앞쪽<br/>통로',
          executiveOffice: '대통령<br/>집무실',
          mainEntrance: '주 출입구',
          frontStairs: '앞쪽 계단',
          pantry: '식료품<br/>저장실',
          kitchen: '주방',
          executiveHallway: '대통령 통로',
          executiveBedroom: '대통령<br/>침실',
          changeRoom: '탈의실',
          laund: '세탁실',
          frontServiceEntrance: '앞쪽 승무원<br/>출입구',
          rightWing: '우측 윙',
          backServiceEntrance: '뒤쪽 승무원<br/>출입구',
          reporterEntrance: '기자 출입구',
          leftWing: '좌측 윙',
          staffSection: '승무원<br/>대기실',
          securityRoom: '경호원실',
          pressSectionA: '기자석 A',
          pressSectionB: '기자석 B',
          backStairs: '뒤쪽 계단',
          cargoHold: '화물 적재실',
          serviceCorridor: '서비스 통로',
          storage: '저장실',
          luggageHold: '수화물<br/>적재실',
          firstAidStation: '응급 치료실',
          cargoFrontEntrance: '화무실<br/>정문',
          cockpitStairs: '조종실 계단',
          cabinStaff: '승무원실',
          radioCabin: '무전실',
          cabin: '조종실',
          caterer: '기내식<br/>공급 지점',
          serverRoomA: '서버실 A',
          serverRoomB: '서버실 B',
          technicalSeating: '정비공 좌석',
          ladderRoom: ''
        },
        skyscraper: {
          helipad: '외부 헬기장',
          tower: '외부 탑',
          ventilationUnits: '외부 환풍기',
          kitchen: '주방',
          pantry: '식료품 저장실',
          deliveryRoom: '택배실',
          houseLobby: '집 로비',
          houseEntrance: '집<br/>출입구',
          mainEntrance: '정문',
          reception: '응접실',
          bedroom: '침실',
          closet: '벽장',
          bathroom: '화장실',
          houseStairs: '집<br/>계단',
          restaurant: '식당',
          toilet: '화장실',
          bbq: 'BBQ',
          backHallway: '뒤쪽 복도',
          mainStairs: '중앙<br/>계단',
          geishaRoom: '기생방',
          hallway: '복도',
          karaoke: '노래방',
          teaRoom: '다과실',
          taiko: '태고실',
          terrace: '테라스',
          backStairs: '뒤쪽<br/>계단',
          houseBalcony: '집<br/>발코니',
          exhibition: '전시실',
          lounge: '라운지',
          workOffice: '집무실',
          clearance: 'VIP 공간',
          peacefullTree: '평화로운<br/>나무',
          contemplationGarden: '명상<br/>정원',
          westGarden: '서쪽<br/>정원',
          bridge: '다리',
          gazeebo: '정자',
          restBalcony: '식당<br/>발코니',
          northGarden: '북쪽<br/>정원',
          eastGarden: '동쪽<br/>정원',
          sandGarden: '모래<br/>정원',
          sidePath: '옆길',
          sideStairs: '측면 계단',
          dragonStatue: '용 조각상',
          coveredWalkway: '연결<br/>보도'
        },
        yacht: {
          spawnSubmarine: '잠수함',
          spawnZodiak: '구명정',
          spawnSnowMobile: '설상차',
          mapsRoom: '지도실',
          cockpit: '조종실',
          cockpitHallway: '조종실 복도',
          captainsOffice: '선장<br/>사무실',
          cockpitBalcony: '조종실<br/>발코니',
          topDeckStairs: '최상 갑판<br/>계단',
          helipadEntrance: '헬기장<br/>입구',
          helipad: '헬기장',
          spaDeck: '스파 갑판',
          eastDeck: '동쪽 갑판',
          westDeck: '서쪽 갑판',
          frontDeck: '전방<br/>갑판',
          masterBedroom: '선장실',
          casino: '카지노',
          pokerRoom: '포커룸',
          bathroom: '화장실',
          bedroomHallway: '화장실 복도',
          casinoHallway: '카지노 복도',
          globeHallway: '지구본실<br/>복도',
          lounge: '라운지',
          cafeteria: '구내식당',
          engine: '기관실',
          backEntrance: '뒤쪽<br/>출입구',
          rearDeck: '후방 갑판',
          serverRoom: '서버실',
          engineStorage: '기관실<br/>저장고',
          engineControl: '기관<br/>조종실',
          backStairs: '뒤쪽<br/>계단',
          emergencyExit: '비상구',
          engineHallway: '기관실 복도',
          frontStairs: '앞쪽<br/>계단',
          kitchen: '주방',
          staffDormitory: '승무원<br/>공동 침실',
          westBalcony: '서쪽 발코니',
          eastBalcony: '동쪽 발코니',
          kitchenHallway: '주방 복도',
          kitchenStairs: '주방 계단',
          kitchenPantry: '주방<br/>식료품<br/>저장실',
          infirmary: '의무실',
          borealSubRoom: 'Aklark<br/>보조실',
          cafeteriaHallway: '구내식당 복도',
          engineUtility: '기관<br/>제어기',
          submarine: '잠수함',
          westGlacier: '서쪽 빙하',
          eastHullBreach: '동쪽 선체 균열',
          eastGlacier: '동쪽 빙하',
          frozenRiver: '얼어붙은 강',
          zodiac: '구명정',
          westHullBreach: '서쪽 선체 균열',
          kingOfTheWorld: '',
          roof: '',
          anchorName: '',
          aklarkSubEntrance: ''
        }
      }
    };

  R6MapsLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MapsLangTerms);
